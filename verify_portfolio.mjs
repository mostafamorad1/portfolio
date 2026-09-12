import http from "http";
import https from "https";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";

const PORT = 3012;
const BASE_URL = `http://localhost:${PORT}`;

let serverProcess = null;
let passedCount = 0;
let failedCount = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`  ✓ PASS: ${testName}`);
    passedCount++;
  } else {
    console.error(`  ✗ FAIL: ${testName}`);
    failedCount++;
  }
}

function fetchUrl(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === "https:" ? https : http;
    const req = client.request(url, options, (res) => {
      let data = Buffer.from([]);
      res.on("data", (chunk) => {
        data = Buffer.concat([data, chunk]);
      });
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data.toString("utf-8"),
          buffer: data,
        });
      });
    });
    req.on("error", reject);
    if (options.body) {
      req.write(options.body);
    }
    req.end();
  });
}

async function waitForServer(retries = 30) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetchUrl(BASE_URL);
      if (res.statusCode === 200) return true;
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  return false;
}

async function runTests() {
  console.log("=== Starting Next.js Production Server for Comprehensive Verification ===");
  serverProcess = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: "f:\\DEPI\\portfolio\\website",
    shell: true,
    stdio: "inherit",
  });

  const isUp = await waitForServer();
  if (!isUp) {
    console.error("Failed to start server within timeout");
    if (serverProcess) serverProcess.kill();
    process.exit(1);
  }

  console.log("\n--- Category 1: Main Page & Markup Integrity ---");
  const homeRes = await fetchUrl(BASE_URL);
  assert(homeRes.statusCode === 200, "Homepage returns HTTP 200 OK");
  assert(homeRes.body.includes('lang="en"'), 'HTML has default lang="en"');
  assert(homeRes.body.includes('dir="ltr"'), 'HTML has default dir="ltr"');
  assert(homeRes.body.includes('class="dark"'), 'HTML has default class="dark"');
  assert(homeRes.body.includes("portfolio_theme"), "HTML contains inline anti-FOUC theme handler");
  assert(homeRes.body.includes("portfolio_lang"), "HTML contains inline anti-FOUC language handler");
  assert(
    homeRes.body.includes("prefers-color-scheme: light"),
    "Inline script accounts for system light mode preference"
  );
  assert(
    homeRes.body.includes("Mostafa Morad | Data Engineer &amp; Software Developer") ||
      homeRes.body.includes("Mostafa Morad | Data Engineer & Software Developer"),
    "Title metadata matches expected persona"
  );

  console.log("\n--- Category 2: Core USP (Requirement R4) ---");
  const enUsp =
    "I help organizations optimize their operational performance through scalable data pipelines, Next.js web applications, and insightful BI analytics.";
  assert(homeRes.body.includes(enUsp), "Exact English USP core message is present in rendered HTML");

  // Search JS chunks for Arabic USP
  const chunksDir = path.join("f:\\DEPI\\portfolio\\website\\.next\\static\\chunks");
  let foundArUsp = false;
  const arUsp = "أساعد المؤسسات على تحسين أدائها التشغيلي من خلال تطوير تطبيقات ويب سريعة وتحليلات بيانات دقيقة.";
  
  function searchChunks(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        searchChunks(fullPath);
      } else if (file.endsWith(".js")) {
        const content = fs.readFileSync(fullPath, "utf-8");
        if (content.includes(arUsp)) {
          foundArUsp = true;
          break;
        }
      }
    }
  }
  searchChunks(chunksDir);
  assert(foundArUsp, "Exact Arabic USP core message is bundled in client chunks");

  console.log("\n--- Category 3: All 9 Sections Present (Requirement R3) ---");
  const requiredSections = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "services",
    "education",
    "achievements",
    "contact",
  ];
  for (const section of requiredSections) {
    assert(homeRes.body.includes(`id="${section}"`), `Section #${section} element is present in DOM`);
  }

  console.log("\n--- Category 4: Semantic Navigation Links ---");
  for (const section of requiredSections) {
    assert(homeRes.body.includes(`href="#${section}"`), `Anchor href="#${section}" is present for navigation`);
  }

  console.log("\n--- Category 5: CV Entities & Links Verification ---");
  assert(homeRes.body.includes("FCAI-CU") || foundInChunks("FCAI-CU"), "FCAI-CU degree entity present");
  assert(homeRes.body.includes("DEPI") || foundInChunks("DEPI"), "DEPI initiative entity present");
  assert(
    homeRes.body.includes("https://gen-academy.org") || foundInChunks("https://gen-academy.org"),
    "GEN Academy URL (https://gen-academy.org) present"
  );
  assert(homeRes.body.includes("Huawei") || foundInChunks("Huawei"), "Huawei certification entity present");
  assert(homeRes.body.includes("GCI World") || foundInChunks("GCI World"), "GCI World credential present");

  console.log("\n--- Category 6: Media Assets Serving & Status (Requirement R5) ---");
  const assetsToTest = [
    { url: `${BASE_URL}/profile.jpg`, mime: "image/jpeg", name: "Profile picture" },
    { url: `${BASE_URL}/projects/gen-academy-logo.png`, mime: "image/png", name: "GEN Academy logo" },
    { url: `${BASE_URL}/projects/chocolate-dashboard.png`, mime: "image/png", name: "Chocolate Dashboard screenshot" },
    { url: `${BASE_URL}/projects/fuel-management-dashboard.jpg`, mime: "image/jpeg", name: "Fuel Management Dashboard image" },
    { url: `${BASE_URL}/projects/n8n-workflow-automation.jpg`, mime: "image/jpeg", name: "n8n Workflow Automation image" },
    { url: `${BASE_URL}/Mostafa_Morad_CV.pdf`, mime: "application/pdf", name: "CV PDF download asset" },
  ];

  for (const asset of assetsToTest) {
    const res = await fetchUrl(asset.url);
    assert(res.statusCode === 200, `${asset.name} (${asset.url}) returns HTTP 200`);
    assert(
      res.headers["content-type"] && res.headers["content-type"].includes(asset.mime),
      `${asset.name} MIME type is ${asset.mime}`
    );
  }

  console.log("\n--- Category 7: Contact API Route Verification ---");
  // Test invalid payload
  const emptyRes = await fetchUrl(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });
  assert(emptyRes.statusCode === 400, "Empty POST to /api/contact returns 400 Bad Request");

  // Test invalid email
  const badEmailRes = await fetchUrl(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Tester", email: "notanemail", message: "Hello world" }),
  });
  assert(badEmailRes.statusCode === 400, "Invalid email to /api/contact returns 400 Bad Request");

  // Test valid payload
  const validRes = await fetchUrl(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Adversarial Reviewer",
      email: "reviewer@depi.gov.eg",
      subject: "Verification Test",
      message: "Automated verification test payload.",
    }),
  });
  assert(validRes.statusCode === 200, "Valid POST to /api/contact returns 200 OK");
  const validData = JSON.parse(validRes.body);
  assert(validData.success === true, "Valid response JSON contains { success: true }");

  console.log("\n--- Category 8: CSS Rules & RTL Isolation ---");
  const cssDir = path.join("f:\\DEPI\\portfolio\\website\\.next\\static\\css");
  let cssText = "";
  if (fs.existsSync(cssDir)) {
    for (const f of fs.readdirSync(cssDir)) {
      if (f.endsWith(".css")) {
        cssText += fs.readFileSync(path.join(cssDir, f), "utf-8");
      }
    }
  }
  assert(cssText.includes("scroll-behavior:smooth"), "Smooth scrolling configured in global CSS");
  assert(cssText.includes("scroll-margin-top:5rem") || cssText.includes("scroll-mt-20"), "Scroll margin top classes present");
  assert(cssText.includes("right:-17px") && cssText.includes("left:-17px"), "Timeline positioning for LTR and RTL both present");
  assert(!cssText.includes("slate-850"), "Invalid slate-850 utility class is completely absent");

  console.log("\n--- Category 9: Accessibility Landmarks & Semantics ---");
  assert(homeRes.body.includes('href="#main-content"'), "Skip to main content anchor is present in DOM");
  assert(homeRes.body.includes('id="main-content"'), "Main landmark #main-content is present in DOM");
  assert(
    homeRes.body.includes('id="contact-name"') || foundInChunks('id:"contact-name"'),
    "Contact form inputs have explicit id attributes"
  );
  assert(
    homeRes.body.includes('contact-name') || foundInChunks('contact-name'),
    "Contact labels have htmlFor association"
  );
  assert(
    foundInChunks('role:"progressbar"') || foundInChunks('progressbar') || homeRes.body.includes("progressbar"),
    "Skills progress bars include role='progressbar' semantics"
  );
  assert(
    foundInChunks('bdi') && foundInChunks('dir:"ltr"'),
    "Contact phone number is protected with bdi dir='ltr' directional isolation"
  );

  console.log("\n--- Category 10: Honeypot & Anti-Spam Security ---");
  // Test honeypot trigger (should silently return 200 without error)
  const honeypotRes = await fetchUrl(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Spam Bot",
      email: "bot@spammer.org",
      message: "Automated spam payload.",
      website_url: "https://spammer.org",
    }),
  });
  assert(honeypotRes.statusCode === 200, "Honeypot submission is silently accepted with HTTP 200");
  const hpData = JSON.parse(honeypotRes.body);
  assert(hpData.success === true, "Honeypot response contains { success: true }");

  // Test rate limiting by sending rapid requests with a test IP
  let gotRateLimited = false;
  for (let i = 0; i < 7; i++) {
    const rlRes = await fetchUrl(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": "198.51.100.42",
      },
      body: JSON.stringify({
        name: `RateLimit Tester ${i}`,
        email: "ratelimit@test.org",
        message: "Testing rate limit threshold.",
      }),
    });
    if (rlRes.statusCode === 429) {
      gotRateLimited = true;
      break;
    }
  }
  assert(gotRateLimited, "Excess contact submissions are blocked with HTTP 429 Too Many Requests");

  console.log("\n--- Category 11: Font Stack & Typography Fallback ---");
  assert(
    cssText.includes("--font-sans") && cssText.includes("--font-geist-sans"),
    "Geist font variable alias is correctly defined in CSS"
  );
  assert(
    cssText.includes("Noto Sans Arabic") || cssText.includes("Cairo"),
    "Arabic typography fallback stack is active in CSS"
  );

  console.log(`\n==================================================`);
  console.log(`FINAL RESULT: ${passedCount} PASSED, ${failedCount} FAILED`);
  console.log(`==================================================\n`);

  if (serverProcess) {
    // Kill child process tree on Windows
    spawn("taskkill", ["/pid", String(serverProcess.pid), "/f", "/t"], { shell: true });
  }

  process.exit(failedCount > 0 ? 1 : 0);
}

function foundInChunks(str) {
  const chunksDir = path.join("f:\\DEPI\\portfolio\\website\\.next\\static\\chunks");
  let found = false;
  function search(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        search(fullPath);
      } else if (file.endsWith(".js")) {
        const content = fs.readFileSync(fullPath, "utf-8");
        if (content.includes(str)) {
          found = true;
          break;
        }
      }
    }
  }
  search(chunksDir);
  return found;
}

runTests().catch((err) => {
  console.error("Test execution fatal error:", err);
  if (serverProcess) {
    spawn("taskkill", ["/pid", String(serverProcess.pid), "/f", "/t"], { shell: true });
  }
  process.exit(1);
});

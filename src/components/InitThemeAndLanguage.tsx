export const InitThemeAndLanguage = () => {
  return <script dangerouslySetInnerHTML={{ __html: `
try {
  let lang = localStorage.getItem("portfolio_lang");
  if (!lang) { lang = "en"; }
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  let theme = localStorage.getItem("portfolio_theme");
  if (!theme) {
    theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
} catch (e) {}
` }} />
}

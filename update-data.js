const fs = require('fs');
let content = fs.readFileSync('src/data/portfolioData.ts', 'utf8');

content = content.replace(
  'export interface PortfolioContent {',
  'export interface TestimonialItem {\n  id: string;\n  quote: string;\n  attribution: string;\n}\n\nexport interface PortfolioContent {'
);

content = content.replace(
  '  contact: {',
  '  testimonials: {\n    title: string;\n    subtitle: string;\n    items: TestimonialItem[];\n  };\n  contact: {'
);

content = content.replace(
  '    contact: {\n      title: "Get In Touch",',
  `    testimonials: {
      title: "Testimonials",
      subtitle: "Feedback from professionals and collaborators I've worked with.",
      items: [
        {
          id: "t1",
          quote: "Mostafa is a hardworking professional and a fast learner. He approaches complex challenges calmly and systematically, demonstrating a strong ability to maintain focus and manage multiple tasks effectively.",
          attribution: "Professional Peer"
        },
        {
          id: "t2",
          quote: "Having worked together, I can attest to Mostafa's strong focus and multitasking abilities. He frequently completes his work efficiently ahead of strict deadlines and consistently delivers highly productive, meaningful results.",
          attribution: "Project Collaborator"
        }
      ]
    },
    contact: {
      title: "Get In Touch",`
);

content = content.replace(
  '    contact: {\n      title: "تواصل معي",',
  `    testimonials: {
      title: "التوصيات والآراء",
      subtitle: "آراء مهنية من الزملاء الذين عملت معهم في مشاريع سابقة.",
      items: [
        {
          id: "t1",
          quote: "مصطفى شخص مجتهد وسريع التعلم. يتعامل مع التحديات المعقدة بهدوء وبطريقة منهجية، ويتمتع بقدرة قوية على الحفاظ على التركيز وإدارة مهام متعددة بكفاءة.",
          attribution: "رأي مهني"
        },
        {
          id: "t2",
          quote: "من خلال عملنا معاً، أستطيع أن أشهد بتركيز مصطفى العالي وقدرته على إنجاز المهام المتعددة. غالباً ما ينهي عمله بكفاءة قبل المواعيد النهائية ويقدم دائماً نتائج قيمة ومثمرة.",
          attribution: "زميل مشروع"
        }
      ]
    },
    contact: {
      title: "تواصل معي",`
);

fs.writeFileSync('src/data/portfolioData.ts', content, 'utf8');
console.log('Done!');

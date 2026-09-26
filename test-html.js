const http = require('http');

http.get('http://localhost:3000', (res) => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    // Check for script errors in the rendered HTML
    // Look for any Next.js error overlay indicators
    const hasNextError = d.includes('__next-error') || d.includes('nextjs-portal');
    console.log('Has Next.js error overlay:', hasNextError);
    
    // Check for the motion.div with opacity 0 in hero
    const motionMatch = d.match(/opacity:0/g);
    console.log('Opacity:0 occurrences:', motionMatch ? motionMatch.length : 0);
    
    // Check if framer-motion scripts are loaded
    console.log('Has framer-motion:', d.includes('framer-motion') || d.includes('motion'));
    
    // Check for any runtime error messages
    const errorMatch = d.match(/Unhandled|uncaught|TypeError|ReferenceError|SyntaxError/gi);
    console.log('Runtime error patterns:', errorMatch);
    
    // Check if the body has the right classes
    const bodyMatch = d.match(/<body[^>]*class="([^"]*)"/);
    console.log('Body classes:', bodyMatch ? bodyMatch[1] : 'NOT FOUND');
    
    // Check the hero motion div
    const heroDiv = d.match(/lg:col-span-7.*?text-start/);
    console.log('Hero motion div found:', !!heroDiv);
    
    // Check initial style on motion divs
    const styleOpacity = d.match(/style="[^"]*opacity:\s*0/g);
    console.log('Elements with style opacity:0:', styleOpacity ? styleOpacity.length : 0);
    
    // Check for useThemeLanguage context error
    console.log('Has ThemeLanguageProvider:', d.includes('ThemeLanguageProvider'));
    
    // Check for the content being rendered
    console.log('Has "DATA ENGINEER" badge:', d.includes('DATA ENGINEER'));
    console.log('Has "DEPI" badge:', d.includes('>DEPI<'));
    console.log('Has headline text:', d.includes('I build data systems'));
  });
}).on('error', e => console.error(e));

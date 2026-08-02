const fs = require('fs');
const path = require('path');

function replaceInFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      replaceInFiles(filePath);
    } else if (file.endsWith('.css') || file.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      const original = content;
      
      content = content.replace(/'Space Grotesk', sans-serif/g, 'var(--font-heading)');
      content = content.replace(/'Inter', sans-serif/g, 'var(--font-body)');
      content = content.replace(/'JetBrains Mono', monospace/g, 'var(--font-mono)');
      
      if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated fonts in ${filePath}`);
      }
    }
  }
}

replaceInFiles(path.join(__dirname, 'src'));
console.log('Done.');

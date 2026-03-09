const fs = require('fs');

const parsed = JSON.parse(fs.readFileSync('parsed_questions.json', 'utf8'));

let content = fs.readFileSync('src/data/questions.ts', 'utf8');

// Find the end of the array
const arrayEndIndex = content.lastIndexOf('];');

if (arrayEndIndex !== -1) {
  const newQuestionsStr = parsed.map(q => JSON.stringify(q, null, 2)).join(',\n  ') + '\n';
  content = content.substring(0, arrayEndIndex) + '  ,\n  ' + newQuestionsStr + '\n' + content.substring(arrayEndIndex);
  fs.writeFileSync('src/data/questions.ts', content);
}

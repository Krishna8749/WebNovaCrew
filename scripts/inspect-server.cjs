const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('server').filter(f => f.endsWith('.ts'));
for (const f of files) {
  const content = fs.readFileSync(path.join('server', f), 'utf8');
  const imports = content.match(/from\s+['"][^'"]+['"]/g) || [];
  console.log(f, '-->', imports);
}

const fs = require('fs');

function readdir(path) {
  return fs.readdirSync(path).flatMap(file => {
    const filePath = `${path}/${file}`;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      return readdir(filePath);
    }
    return [filePath];
  });
}

const tsfiles = [
  ...readdir('interfaces'),
  ...readdir('runtime'),
].filter(x => x.endsWith('.d.ts'));

const file = `// This file is generated off the generate-main-ts.js script\n`
  + tsfiles.map(x => `export * from './${x.replace('.d.ts', '')}';`).join('\n');

fs.writeFileSync('construct3.d.ts', file);
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'src', 'data', 'blogData.js');

// Require the blogData file by transpiling minimal import: eval its export
const content = fs.readFileSync(dataPath, 'utf8');
const match = content.match(/export const blogData = (\[.|\s|\S)*?\];/m);
if (!match) {
  console.error('Could not find blogData export');
  process.exit(1);
}
const jsonText = match[0].replace(/export const blogData =/, '').trim();

// Convert JS template literals to plain strings for parsing: replace backticks with double quotes for this simple file
const sanitized = jsonText.replace(/`/g, '"');

let posts;
try {
  posts = eval('(' + sanitized + ')');
} catch (e) {
  console.error('Failed to parse blogData:', e.message);
  process.exit(1);
}

const publicDir = path.join(__dirname, '..', 'public');
const missing = [];
const duplicates = {};
const seen = {};

posts.forEach((p) => {
  const c = p.coverImage || p.image || p.detailImage;
  const h = p.heroImage || p.detailImage || p.image;
  [ ['coverImage', c], ['heroImage', h] ].forEach(([key, val]) => {
    if (!val) {
      missing.push({ id: p.id, slug: p.slug, field: key, path: val });
      return;
    }
    const full = path.join(publicDir, val.replace(/^\//, ''));
    if (!fs.existsSync(full)) {
      missing.push({ id: p.id, slug: p.slug, field: key, path: full });
    }
    // record duplicates
    if (seen[val]) {
      duplicates[val] = duplicates[val] || [];
      duplicates[val].push(p.slug);
    } else {
      seen[val] = p.slug;
    }
  });
});

console.log('Blog images verification report');
console.log('--------------------------------');
console.log('Total posts:', posts.length);
console.log('Missing files:', missing.length);
if (missing.length) console.table(missing);

const dupKeys = Object.keys(duplicates).filter(k => duplicates[k].length > 0);
console.log('Duplicate image usages (image -> posts):', dupKeys.length);
if (dupKeys.length) {
  dupKeys.forEach(k => console.log(k, '->', [seen[k]].concat(duplicates[k]).join(', ')));
}

if (missing.length > 0 || dupKeys.length > 0) process.exit(2);
console.log('All images present and uniqueness check passed (no duplicates detected in seen map).');

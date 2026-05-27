const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'src', 'data', 'blogData.js');

const content = fs.readFileSync(dataPath, 'utf8');
// Find the start of the array literal for blogData
const startIdx = content.indexOf('export const blogData');
if (startIdx === -1) {
  console.error('Could not find blogData export');
  process.exit(1);
}
const arrStart = content.indexOf('[', startIdx);
if (arrStart === -1) {
  console.error('Could not find blogData array start');
  process.exit(1);
}
let i = arrStart + 1;
const blocks = [];
while (i < content.length) {
  // find next object
  while (i < content.length && content[i] !== '{') i++;
  if (i >= content.length) break;
  let braceDepth = 0;
  const objStart = i;
  while (i < content.length) {
    if (content[i] === '{') braceDepth++;
    else if (content[i] === '}') {
      braceDepth--;
      if (braceDepth === 0) {
        const objText = content.slice(objStart, i + 1);
        blocks.push(objText);
        i++;
        break;
      }
    }
    i++;
  }
}

// parse imports at top to resolve variable image references
const importMap = {};
const importRegex = /import\s+([A-Za-z0-9_$]+)\s+from\s+["']([^"']+)["']/g;
let im;
while ((im = importRegex.exec(content)) !== null) {
  importMap[im[1]] = im[2];
}

const posts = [];
blocks.forEach((blk) => {
  const idMatch = blk.match(/id:\s*(\d+)/);
  if (!idMatch) return;
  const id = Number(idMatch[1]);
  const slugMatch = blk.match(/slug:\s*"([^"]+)"/);
  const slug = slugMatch ? slugMatch[1] : `post-${id}`;
  let coverMatch = blk.match(/coverImage:\s*"([^"]+)"/);
  let heroMatch = blk.match(/heroImage:\s*"([^"]+)"/);
  // allow variable references (unquoted)
  if (!coverMatch) {
    const varMatch = blk.match(/coverImage:\s*([A-Za-z0-9_$]+)/);
    if (varMatch && importMap[varMatch[1]]) coverMatch = [null, importMap[varMatch[1]]];
  }
  if (!heroMatch) {
    const varMatch = blk.match(/heroImage:\s*([A-Za-z0-9_$]+)/);
    if (varMatch && importMap[varMatch[1]]) heroMatch = [null, importMap[varMatch[1]]];
  }
  const imageMatch = blk.match(/image:\s*"([^"]+)"/);
  const detailMatch = blk.match(/detailImage:\s*"([^"]+)"/);
  posts.push({ id, slug, coverImage: coverMatch && coverMatch[1], heroImage: heroMatch && heroMatch[1], image: imageMatch && imageMatch[1], detailImage: detailMatch && detailMatch[1] });
});

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
    let full;
    if (val.startsWith('@/')) {
      full = path.join(__dirname, '..', 'src', val.replace(/^@\//, ''));
    } else if (val.startsWith('/')) {
      full = path.join(publicDir, val.replace(/^\//, ''));
    } else {
      // relative or other
      full = path.join(__dirname, '..', val);
    }
    if (!fs.existsSync(full)) {
      missing.push({ id: p.id, slug: p.slug, field: key, path: full });
    }
    if (seen[val] && seen[val] !== p.slug) {
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

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '..', 'src', 'assets');
const outDir = path.join(__dirname, '..', 'public', 'images', 'blog');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const mapping = [
  { src: 'about-building.jpg', dest: 'blog1.jpg' },
  { src: 'project-office.jpg', dest: 'blog2.jpg' },
  { src: 'project-commercial.jpg', dest: 'blog3.jpg' },
  { src: 'project-residential.jpg', dest: 'blog4.jpg' },
  { src: 'project-retail.jpg', dest: 'blog5.jpg' },
  { src: 'project-landscape.jpg', dest: 'blog6.jpg' },
  { src: 'project-roofgarden.jpg', dest: 'blog7.jpg' },
  { src: 'service-design.jpg', dest: 'blog8.jpg' },
  { src: 'hero.jpg', dest: 'blog9.jpg' },
  { src: 'blog-sample.jpg', dest: 'blog10.jpg' }
];

for (const m of mapping) {
  const srcPath = path.join(assetsDir, m.src);
  const destPath = path.join(outDir, m.dest);
  try {
    if (!fs.existsSync(srcPath)) {
      console.warn('Missing asset', srcPath);
      continue;
    }
    fs.copyFileSync(srcPath, destPath);
    console.log('Copied', m.src, '→', destPath);
  } catch (err) {
    console.error('Failed copying', m.src, err.message || err);
  }
}

console.log('Done');

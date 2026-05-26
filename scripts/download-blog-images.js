import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  { url: 'https://source.unsplash.com/1200x800/?infrastructure,bridge', file: 'blog1.jpg' },
  { url: 'https://source.unsplash.com/1200x800/?sustainable,green-building', file: 'blog2.jpg' },
  { url: 'https://source.unsplash.com/1200x800/?bim,architecture', file: 'blog3.jpg' },
  { url: 'https://source.unsplash.com/1200x800/?construction,site', file: 'blog4.jpg' },
  { url: 'https://source.unsplash.com/1200x800/?smart-city,technology', file: 'blog5.jpg' },
  { url: 'https://source.unsplash.com/1200x800/?urban-design,people', file: 'blog6.jpg' },
  { url: 'https://source.unsplash.com/1200x800/?climate,storm,drainage', file: 'blog7.jpg' },
  { url: 'https://source.unsplash.com/1200x800/?rendering,3d,visualization', file: 'blog8.jpg' },
  { url: 'https://source.unsplash.com/1200x800/?construction,planning,site', file: 'blog9.jpg' },
  { url: 'https://source.unsplash.com/1200x800/?mixed-use,development,urban', file: 'blog10.jpg' },
];

const outDir = path.join(__dirname, '..', 'public', 'images', 'blog');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function download(image) {
  const dest = path.join(outDir, image.file);
  return new Promise((resolve, reject) => {
    const req = https.get(image.url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // follow redirect
        https.get(res.headers.location, (r2) => {
          r2.pipe(fs.createWriteStream(dest))
            .on('finish', () => {
              console.log('Saved', image.file);
              resolve();
            })
            .on('error', reject);
        }).on('error', reject);
      } else if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(dest))
          .on('finish', () => {
            console.log('Saved', image.file);
            resolve();
          })
          .on('error', reject);
      } else {
        reject(new Error('Failed to download ' + image.url + ' status ' + res.statusCode));
      }
    });
    req.on('error', reject);
  });
}

(async () => {
  for (const img of images) {
    try {
      // Unsplash may redirect; our downloader handles one redirect
      await download(img);
    } catch (err) {
      console.error('Error downloading', img.url, err.message || err);
    }
  }
  console.log('Done');
})();

import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public/assets/images');
const outputFile = path.join(imagesDir, '..', 'images.json');

const files = fs.readdirSync(imagesDir)
  .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
  .map(file => ({
    image: file,
    tags: ["default"]
  }));

fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
console.log('✅ images.json generated successfully!');

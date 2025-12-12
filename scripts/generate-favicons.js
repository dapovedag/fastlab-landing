const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// SVG del engranaje con gradiente púrpura
const createFaviconSVG = (size) => {
  const gearSize = Math.round(size * 0.7);
  const strokeWidth = size <= 32 ? 2.5 : 3;
  const radius = Math.round(size * 0.19);

  return `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#a855f7"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${radius}" fill="url(#grad)"/>
  <g transform="translate(${(size - gearSize) / 2}, ${(size - gearSize) / 2})">
    <svg width="${gearSize}" height="${gearSize}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  </g>
</svg>`;
};

async function generateFavicons() {
  console.log('Generando favicons...');

  // Generar favicon-16x16.png
  await sharp(Buffer.from(createFaviconSVG(16)))
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('✓ favicon-16x16.png');

  // Generar favicon-32x32.png
  await sharp(Buffer.from(createFaviconSVG(32)))
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('✓ favicon-32x32.png');

  // Generar favicon-48x48.png (para ICO)
  await sharp(Buffer.from(createFaviconSVG(48)))
    .png()
    .toFile(path.join(publicDir, 'favicon-48x48.png'));
  console.log('✓ favicon-48x48.png');

  // Generar apple-touch-icon.png (180x180)
  await sharp(Buffer.from(createFaviconSVG(180)))
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png');

  // Generar android-chrome-192x192.png
  await sharp(Buffer.from(createFaviconSVG(192)))
    .png()
    .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  console.log('✓ android-chrome-192x192.png');

  // Generar android-chrome-512x512.png
  await sharp(Buffer.from(createFaviconSVG(512)))
    .png()
    .toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  console.log('✓ android-chrome-512x512.png');

  // Crear favicon.ico (usando el PNG de 32x32 como base)
  // Sharp no puede crear ICO directamente, así que creamos un PNG que se puede convertir
  // Para el ICO real, usaremos el enfoque de múltiples tamaños empaquetados

  // Crear un ICO simple usando el formato más compatible
  const ico16 = await sharp(Buffer.from(createFaviconSVG(16))).png().toBuffer();
  const ico32 = await sharp(Buffer.from(createFaviconSVG(32))).png().toBuffer();
  const ico48 = await sharp(Buffer.from(createFaviconSVG(48))).png().toBuffer();

  // Crear archivo ICO manualmente (formato básico)
  const icoBuffer = createICO([
    { buffer: ico16, size: 16 },
    { buffer: ico32, size: 32 },
    { buffer: ico48, size: 48 }
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('✓ favicon.ico');

  console.log('\n¡Todos los favicons han sido generados!');
}

// Función para crear un archivo ICO simple
function createICO(images) {
  // ICO header: 6 bytes
  // ICONDIR structure
  const headerSize = 6;
  const dirEntrySize = 16;
  const numImages = images.length;

  // Calcular tamaño total y offsets
  let dataOffset = headerSize + (dirEntrySize * numImages);
  const entries = [];
  const dataBuffers = [];

  for (const img of images) {
    const pngData = img.buffer;
    entries.push({
      width: img.size === 256 ? 0 : img.size,
      height: img.size === 256 ? 0 : img.size,
      colorCount: 0,
      reserved: 0,
      planes: 1,
      bitCount: 32,
      bytesInRes: pngData.length,
      imageOffset: dataOffset
    });
    dataBuffers.push(pngData);
    dataOffset += pngData.length;
  }

  // Crear buffer del ICO
  const totalSize = dataOffset;
  const ico = Buffer.alloc(totalSize);

  // Escribir header
  ico.writeUInt16LE(0, 0);        // Reserved
  ico.writeUInt16LE(1, 2);        // Type (1 = ICO)
  ico.writeUInt16LE(numImages, 4); // Number of images

  // Escribir directory entries
  let offset = headerSize;
  for (const entry of entries) {
    ico.writeUInt8(entry.width, offset);
    ico.writeUInt8(entry.height, offset + 1);
    ico.writeUInt8(entry.colorCount, offset + 2);
    ico.writeUInt8(entry.reserved, offset + 3);
    ico.writeUInt16LE(entry.planes, offset + 4);
    ico.writeUInt16LE(entry.bitCount, offset + 6);
    ico.writeUInt32LE(entry.bytesInRes, offset + 8);
    ico.writeUInt32LE(entry.imageOffset, offset + 12);
    offset += dirEntrySize;
  }

  // Escribir datos de imágenes
  for (const data of dataBuffers) {
    data.copy(ico, offset);
    offset += data.length;
  }

  return ico;
}

generateFavicons().catch(console.error);

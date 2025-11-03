const sharp = require('sharp');

const logoSVG = (size, bgColor = '#000000') => {
  const scale = size / 100;
  return `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="${bgColor}"/>
      <g transform="translate(${size/2 - 45*scale}, ${size/2 - 45*scale}) scale(${scale})">
        <path d="M50 10 L90 90 L10 90 Z" stroke="white" stroke-width="2.5" fill="none"/>
        <path d="M50 30 L70 70 L30 70 Z" stroke="white" stroke-width="2.5" fill="none"/>
        <path d="M50 10 L50 90" stroke="white" stroke-width="2.5"/>
      </g>
    </svg>
  `;
};

async function generateIcons() {
  // Favicon 32x32
  await sharp(Buffer.from(logoSVG(32)))
    .png()
    .toFile('public/favicon.ico');
  console.log('✅ favicon.ico creado');
  
  // Favicon 16x16
  await sharp(Buffer.from(logoSVG(16)))
    .png()
    .toFile('public/favicon-16x16.png');
  console.log('✅ favicon-16x16.png creado');
  
  // Favicon 32x32 PNG
  await sharp(Buffer.from(logoSVG(32)))
    .png()
    .toFile('public/favicon-32x32.png');
  console.log('✅ favicon-32x32.png creado');
  
  // Apple Touch Icon 180x180
  await sharp(Buffer.from(logoSVG(180)))
    .png()
    .toFile('public/apple-touch-icon.png');
  console.log('✅ apple-touch-icon.png creado');
  
  // Icon 192x192
  await sharp(Buffer.from(logoSVG(192)))
    .png()
    .toFile('public/icon-192.png');
  console.log('✅ icon-192.png creado');
  
  // Icon 512x512
  await sharp(Buffer.from(logoSVG(512)))
    .png()
    .toFile('public/icon-512.png');
  console.log('✅ icon-512.png creado');
}

generateIcons().catch(console.error);

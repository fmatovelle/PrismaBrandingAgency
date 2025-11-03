const sharp = require('sharp');

async function createOGImage() {
  const width = 1200;
  const height = 630;
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#000000"/>
      
      <g transform="translate(550, 150)">
        <path d="M50 0 L100 100 L0 100 Z" stroke="white" stroke-width="3" fill="none"/>
        <path d="M50 25 L75 75 L25 75 Z" stroke="white" stroke-width="3" fill="none"/>
        <path d="M50 0 L50 100" stroke="white" stroke-width="3"/>
      </g>
      
      <text x="600" y="350" 
            font-family="Arial, sans-serif" 
            font-size="64" 
            font-weight="700" 
            fill="white" 
            text-anchor="middle">
        PRISMA BRANDING
      </text>
      
      <text x="600" y="420" 
            font-family="Arial, sans-serif" 
            font-size="28" 
            font-weight="400" 
            fill="#CCCCCC" 
            text-anchor="middle">
        Estudio Creativo en Barcelona
      </text>
      
      <line x1="450" y1="460" x2="750" y2="460" stroke="#333333" stroke-width="2"/>
      
      <text x="600" y="510" 
            font-family="Arial, sans-serif" 
            font-size="20" 
            font-weight="400" 
            fill="#999999" 
            text-anchor="middle">
        Branding • Diseño Web • Estrategia Digital
      </text>
    </svg>
  `;
  
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile('public/og-image.jpg');
  
  console.log('✅ OG-Image creado: public/og-image.jpg');
}

createOGImage().catch(console.error);

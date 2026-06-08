import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

// Recrear __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directorio public de Vite donde deben ir los archivos estáticos
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Lista extraída directamente de tu archivo motorParts.js
const partes = [
  { file: 'piston-standard.png', text: 'Piston+Estandar' },
  { file: 'piston-rings.png', text: 'Anillos+de+Piston' },
  { file: 'piston-pin.png', text: 'Pasador' },
  { file: 'piston-grooves.png', text: 'Ranuras' },
  { file: 'connecting-rod.png', text: 'Biela' },
  { file: 'rod-head.png', text: 'Cabeza+de+Biela' },
  { file: 'rod-foot.png', text: 'Pie+de+Biela' },
  { file: 'rod-bearings.png', text: 'Cojinetes+de+Biela' },
  { file: 'crankshaft.png', text: 'Cigueñal' },
  { file: 'crankshaft-pin.png', text: 'Muñequilla' },
  { file: 'crankshaft-bearings.png', text: 'Cojinetes+Cigueñal' },
  { file: 'flywheel.png', text: 'Volante+de+Motor' },
  { file: 'engine-block.png', text: 'Bloque+de+Cilindros' },
  { file: 'cylinder.png', text: 'Cilindro' },
  { file: 'cylinder-liners.png', text: 'Camisas' },
  { file: 'crankshaft-support.png', text: 'Apoyo+Cigueñal' },
  { file: 'cylinder-head.png', text: 'Culata' },
  { file: 'intake-valve.png', text: 'Valvula+Admision' },
  { file: 'exhaust-valve.png', text: 'Valvula+Escape' },
  { file: 'spark-plug.png', text: 'Bujia' },
  { file: 'camshaft.png', text: 'Arbol+de+Levas' },
  { file: 'intake-cam.png', text: 'Leva+Admision' },
  { file: 'exhaust-cam.png', text: 'Leva+Escape' },
  { file: 'valve-tappet.png', text: 'Taque' },
  { file: 'timing-gear.png', text: 'Engranaje' },
  { file: 'camshaft-bearing.png', text: 'Cojinete+Levas' },
  { file: 'timing-belt.png', text: 'Correa+Distribucion' },
  { file: 'belt-tensioner.png', text: 'Tensor' }
];

console.log('Iniciando descarga de 28 imágenes de relleno...');

partes.forEach(parte => {
  // Servicio de dummy images utilizando tus colores pasteles: Fondo aec6cf, Texto 2d3748
  const url = `https://dummyimage.com/400x400/aec6cf/2d3748.png&text=${parte.text}`;
  const filePath = path.join(publicDir, parte.file);

  https.get(url, (res) => {
    const fileStream = fs.createWriteStream(filePath);
    res.pipe(fileStream);
    fileStream.on('finish', () => console.log(`✅ Descargada: ${parte.file}`));
  }).on('error', (err) => console.log(`❌ Error con ${parte.file}: ${err.message}`));
});
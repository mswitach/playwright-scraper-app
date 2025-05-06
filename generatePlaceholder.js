// generatePlaceholder.js
import fs from 'fs';
import path from 'path';

const now = new Date().toLocaleString('es-AR', {
  timeZone: 'America/Argentina/Buenos_Aires',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
});

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Hora de actualización</title>
</head>
<body>
  <h1>Archivo actualizado por cron</h1>
  <p>🕒 Última actualización: <strong>${now}</strong></p>
</body>
</html>`;

fs.writeFileSync('./public/effective-tests-chart.html', html);
console.log(`✅ Placeholder actualizado a las ${now}`);


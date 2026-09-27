// Tiny static server for Railway: serves the game with no dependencies.
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const types = { '.html': 'text/html; charset=utf-8', '.png': 'image/png', '.js': 'text/javascript', '.css': 'text/css', '.ico': 'image/x-icon' };
const allowed = new Set(['/index.html', '/icon.png']);

http.createServer((req, res) => {
  let url = decodeURIComponent((req.url || '/').split('?')[0]);
  if (url === '/') url = '/index.html';
  if (url === '/health') { res.writeHead(200, { 'Content-Type': 'text/plain' }); return res.end('ok'); }
  if (!allowed.has(url)) { res.writeHead(404, { 'Content-Type': 'text/plain' }); return res.end('No encontrado'); }
  fs.readFile(path.join(root, url), (err, data) => {
    if (err) { res.writeHead(500); return res.end(); }
    res.writeHead(200, { 'Content-Type': types[path.extname(url)], 'Cache-Control': url === '/index.html' ? 'no-cache' : 'public, max-age=86400' });
    res.end(data);
  });
}).listen(process.env.PORT || 3000, () => console.log('Noche Eterna en el puerto ' + (process.env.PORT || 3000)));

const http = require('http');

const server = http.createServer((req, res) => {
  const start = Date.now();
  while (Date.now() - start < 1000) {
    // Memaksa server bekerja keras selama 1 detik
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Demo Auto Scaling</title>
        <script>
          window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
        </script>
        <script defer src="/_vercel/speed-insights/script.js"></script>
      </head>
      <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 100px;">
        <h1>🚀 Demo Auto Scaling Sukses!</h1>
        <p>Terima kasih telah mengunjungi. Request Anda berhasil diproses.</p>
        <p>Waktu Server: ${new Date().toLocaleTimeString()}</p>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

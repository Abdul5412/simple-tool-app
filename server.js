const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let file = req.url === '/' ? 'index.html' : req.url.substring(1);

    const filePath = path.join(__dirname, file);

    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript'
    };

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('File Not Found');
            return;
        }

        res.writeHead(200, {
            'Content-Type': contentType[path.extname(filePath)] || 'text/plain'
        });

        res.end(content);
    });
});

server.listen(8087, () => {
    console.log('To-Do Application running on port 8000');
});

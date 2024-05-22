const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname && pathname.endsWith('.html')) {
        const filePath = '.' + pathname;
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('404 Not Found');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    } else {
z
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});

const port = 8080;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const app = require('./app');
const http = require('http');
const PORT = 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
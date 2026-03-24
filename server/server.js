import { createServer } from 'node:http';

const datos = [];

const servidor = createServer((peticion, respuesta) => {

    // ✅ CORS
    respuesta.setHeader('Access-Control-Allow-Origin', '*');
    respuesta.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    respuesta.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (peticion.method === 'OPTIONS') {
        respuesta.writeHead(200);
        return respuesta.end();
    }

    // GET
    if (peticion.url === "/datos" && peticion.method === "GET") {
        respuesta.writeHead(200, { 'Content-Type': 'application/json' });
        return respuesta.end(JSON.stringify(datos));
    }

    // POST
    if (peticion.url === "/datos" && peticion.method === "POST") {

        let body = "";

        peticion.on("data", chunk => {
            body += chunk.toString();
        });

        peticion.on("end", () => {
            const {title: titulo, body: cuerpo} = JSON.parse(body);

            const guardar = {
                titulo: titulo,
                cuerpo: cuerpo
            }

            datos.push(guardar)

            respuesta.writeHead(201, { 'Content-Type': 'application/json' });
            respuesta.end(JSON.stringify(guardar));
        });
    }

});

servidor.listen(4002, () => {
    console.log('Servidor escuchando en http://localhost:4002');
});
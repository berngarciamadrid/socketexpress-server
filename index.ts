import Server from './clases/server';
import ROUTER from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';


const SERVER = new Server();

// Body Parser
SERVER.app.use( bodyParser.urlencoded({ extended: true}));
SERVER.app.use( bodyParser.json());
SERVER.app.use( cors ( { origin: true, credentials: true }));


// CORS

// Rutas de Servicios
SERVER.app.use('/', ROUTER);
SERVER.app.use('/mensajes', ROUTER);

SERVER.start( () => {
    console.log( `Servidor corriendo en el puerto ${ SERVER.port}`);
})
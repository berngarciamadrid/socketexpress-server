import { Router, Request, Response} from 'express';

const ROUTER = Router ();

ROUTER.get('/mensajes', ( req: Request, res: Response) => {
    res.json( { 
        ok: true,
        mensaje: `Todo está de fruta madre`
    })
})

ROUTER.post('/mensajes', ( req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json( { 
        ok: true,
        // mensaje: `Mensaje posteado`
        cuerpo,
        de
    })
})

ROUTER.post('/mensajes/:id', ( req: Request, res: Response) => {
    // const cuerpo = req.body.cuerpo;
    // const de = req.body.de;
    const TITULO = req.body.titulo;
    const CUERPO = req.body.cuerpo;
    const FAVORITO = req.body.favorito;
    const id = req.params.id;

    res.json( { 
        ok: true,
        // mensaje: `Mensaje posteado`
        TITULO,
        CUERPO,
        FAVORITO,
        id
    })
})

export default ROUTER;
import { Router, Request, Response } from 'express';

export const notariasRouter = Router();

// GET /api/admin-es/notarias — Listar notarías
notariasRouter.get('/', (_req: Request, res: Response) => {
  res.json({ notarias: [] });
});

// GET /api/admin-es/notarias/:id — Detalle notaría
notariasRouter.get('/:id', (req: Request, res: Response) => {
  res.json({ notaria: null, error: 'Not found' });
});

// POST /api/admin-es/notarias — Crear notaría
notariasRouter.post('/', (req: Request, res: Response) => {
  res.status(201).json({ ok: true, id: 'pending' });
});

// PUT /api/admin-es/notarias/:id — Actualizar notaría
notariasRouter.put('/:id', (req: Request, res: Response) => {
  res.json({ ok: true });
});

// DELETE /api/admin-es/notarias/:id — Eliminar notaría
notariasRouter.delete('/:id', (req: Request, res: Response) => {
  res.json({ ok: true });
});

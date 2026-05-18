import { Router, Request, Response } from 'express';

export const usuariosRouter = Router();

// GET /api/admin-es/usuarios — Listar usuarios
usuariosRouter.get('/', (_req: Request, res: Response) => {
  res.json({ usuarios: [] });
});

// GET /api/admin-es/usuarios/:id — Detalle usuario
usuariosRouter.get('/:id', (req: Request, res: Response) => {
  res.json({ usuario: null, error: 'Not found' });
});

// POST /api/admin-es/usuarios — Crear usuario
usuariosRouter.post('/', (req: Request, res: Response) => {
  res.status(201).json({ ok: true, id: 'pending' });
});

// PUT /api/admin-es/usuarios/:id — Actualizar usuario
usuariosRouter.put('/:id', (req: Request, res: Response) => {
  res.json({ ok: true });
});

// DELETE /api/admin-es/usuarios/:id — Eliminar usuario
usuariosRouter.delete('/:id', (req: Request, res: Response) => {
  res.json({ ok: true });
});

// POST /api/admin-es/usuarios/login — Login
usuariosRouter.post('/login', (req: Request, res: Response) => {
  res.status(401).json({ error: 'Not implemented', code: 'NOT_IMPLEMENTED' });
});

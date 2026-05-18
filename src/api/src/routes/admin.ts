import { Router, Request, Response } from 'express';

export const adminRouter = Router();

// GET /api/admin-es/admin/dashboard — Resumen del panel
adminRouter.get('/dashboard', (_req: Request, res: Response) => {
  res.json({
    notarias: { total: 0, activas: 0, pendientes: 0 },
    usuarios: { total: 0, activos: 0, ultimos7dias: 0 },
    documentos: { total: 0, hoy: 0, estaSemana: 0 },
    sistema: { uptime: process.uptime(), memoria: process.memoryUsage() },
  });
});

// GET /api/admin-es/admin/activity — Actividad reciente
adminRouter.get('/activity', (_req: Request, res: Response) => {
  res.json({ activity: [] });
});

// GET /api/admin-es/admin/stats — Estadísticas de uso
adminRouter.get('/stats', (_req: Request, res: Response) => {
  res.json({
    documentosPorTipo: [],
    usuariosPorNotaria: [],
    usoHorario: [],
  });
});

import { Router, Request, Response } from 'express';

export const metricasRouter = Router();

// GET /api/admin-es/metricas — Métricas del sistema
metricasRouter.get('/', (_req: Request, res: Response) => {
  res.json({
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memoria: process.memoryUsage(),
    cpu: process.cpuUsage(),
    version: process.version,
  });
});

// GET /api/admin-es/metricas/dgx — Estado del DGX Spark (si conectado)
metricasRouter.get('/dgx', (_req: Request, res: Response) => {
  res.json({
    conectado: false,
    host: '192.168.1.42',
    info: null,
  });
});

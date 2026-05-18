import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { adminRouter } from './routes/admin.js';
import { notariasRouter } from './routes/notarias.js';
import { usuariosRouter } from './routes/usuarios.js';
import { metricasRouter } from './routes/metricas.js';

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || '4001', 10);

// Middleware
app.use(helmet());
app.use(cors({
  origin: (process.env.CORS_ORIGIN || '*').split(',').map(s => s.trim()),
  credentials: true,
}));
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check
app.get('/api/admin-es/health', (_req, res) => {
  res.json({
    ok: true,
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    servicio: 'admin-es — Panel Administración Escrituria España',
  });
});

// Rutas
app.use('/api/admin-es/admin', adminRouter);
app.use('/api/admin-es/notarias', notariasRouter);
app.use('/api/admin-es/usuarios', usuariosRouter);
app.use('/api/admin-es/metricas', metricasRouter);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: 'Not found', code: 'NOT_FOUND' });
});

// Error handler
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal server error', code: 'INTERNAL_ERROR' });
});

app.listen(PORT, () => {
  console.log(`[admin-es] Panel administración corriendo en puerto ${PORT}`);
});

export default app;

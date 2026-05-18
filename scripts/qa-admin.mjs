#!/usr/bin/env node
/**
 * QA admin-es — Verifica que la estructura del proyecto sea correcta
 */
import { existsSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const checks = [
  // Raíz
  ['package.json', 'package.json raíz'],
  ['tsconfig.json', 'tsconfig.json raíz'],
  ['.env.example', '.env.example'],

  // API
  ['src/api/package.json', 'API package.json'],
  ['src/api/tsconfig.json', 'API tsconfig.json'],
  ['src/api/src/index.ts', 'API entry point'],
  ['src/api/src/routes/admin.ts', 'Ruta admin'],
  ['src/api/src/routes/notarias.ts', 'Ruta notarías'],
  ['src/api/src/routes/usuarios.ts', 'Ruta usuarios'],
  ['src/api/src/routes/metricas.ts', 'Ruta métricas'],

  // Web
  ['src/web/package.json', 'Web package.json'],
  ['src/web/tsconfig.json', 'Web tsconfig.json'],
  ['src/web/vite.config.ts', 'Vite config'],
  ['src/web/index.html', 'HTML entry'],
  ['src/web/src/main.tsx', 'React entry'],
  ['src/web/src/App.tsx', 'App component'],
  ['src/web/src/index.css', 'CSS'],
  ['src/web/src/components/Layout.tsx', 'Layout component'],
  ['src/web/src/pages/DashboardPage.tsx', 'Dashboard page'],
  ['src/web/src/pages/NotariasPage.tsx', 'Notarias page'],
  ['src/web/src/pages/UsuariosPage.tsx', 'Usuarios page'],
  ['src/web/src/pages/MetricasPage.tsx', 'Metricas page'],
  ['src/web/src/pages/ConfigPage.tsx', 'Config page'],

  // Deploy
  ['deploy/Dockerfile.api', 'Dockerfile API'],
  ['deploy/Dockerfile.web', 'Dockerfile Web'],
  ['deploy/nginx.conf', 'Nginx config'],
  ['deploy/docker-compose.yml', 'Docker Compose'],
  ['deploy/docker-compose.dokploy.yml', 'Dokploy guide'],
];

let passed = 0;
let failed = 0;

console.log('\n🧪 QA — admin-es\n');
for (const [rel, desc] of checks) {
  const full = resolve(root, rel);
  const ok = existsSync(full);
  console.log(`  ${ok ? '✅' : '❌'} ${desc} (${rel})`);
  if (ok) passed++;
  else failed++;
}

console.log(`\n📊 Resultado: ${passed} pasaron, ${failed} fallaron de ${checks.length}\n`);
process.exit(failed > 0 ? 1 : 0);

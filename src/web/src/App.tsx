import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { NotariasPage } from './pages/NotariasPage';
import { UsuariosPage } from './pages/UsuariosPage';
import { MetricasPage } from './pages/MetricasPage';
import { ConfigPage } from './pages/ConfigPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/notarias" element={<NotariasPage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/metricas" element={<MetricasPage />} />
        <Route path="/config" element={<ConfigPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;

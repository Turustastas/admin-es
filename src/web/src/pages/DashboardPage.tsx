import { useEffect, useState } from 'react';
import { Building2, Users, FileText, Activity } from 'lucide-react';

interface DashboardData {
  notarias: { total: number; activas: number; pendientes: number };
  usuarios: { total: number; activos: number; ultimos7dias: number };
  documentos: { total: number; hoy: number; estaSemana: number };
  sistema: { uptime: number; memoria: NodeJS.MemoryUsage };
}

export function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin-es/admin/dashboard')
      .then(r => r.json())
      .then(setData)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    {
      icon: Building2,
      label: 'Notarías',
      value: data?.notarias.total ?? 0,
      sub: `${data?.notarias.activas ?? 0} activas`,
      color: 'bg-blue-500',
    },
    {
      icon: Users,
      label: 'Usuarios',
      value: data?.usuarios.total ?? 0,
      sub: `${data?.usuarios.ultimos7dias ?? 0} nuevos (7d)`,
      color: 'bg-green-500',
    },
    {
      icon: FileText,
      label: 'Documentos',
      value: data?.documentos.total ?? 0,
      sub: `${data?.documentos.hoy ?? 0} hoy`,
      color: 'bg-amber-500',
    },
    {
      icon: Activity,
      label: 'Sistema',
      value: data ? `${Math.round(data.sistema.uptime / 3600)}h` : '—',
      sub: 'uptime',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {loading ? (
        <p className="text-slate-500">Cargando...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {cards.map(({ icon: Icon, label, value, sub, color }) => (
            <div key={label} className="bg-white rounded-xl shadow-sm p-5 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-slate-500">{label}</p>
                <div className={`p-2 rounded-lg ${color}`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-xs text-slate-400 mt-1">{sub}</p>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Actividad Reciente</h2>
        <p className="text-slate-400 text-sm">
          Conecta la base de datos para ver la actividad de las notarías.
        </p>
      </div>
    </div>
  );
}

import { LineChart, Cpu, HardDrive, Activity } from 'lucide-react';

export function MetricasPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Métricas del Sistema</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <Cpu className="w-5 h-5 text-blue-500" />
            <p className="font-semibold text-sm">DGX Spark</p>
          </div>
          <p className="text-3xl font-bold">—</p>
          <p className="text-xs text-slate-400 mt-1">Desconectado</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <HardDrive className="w-5 h-5 text-green-500" />
            <p className="font-semibold text-sm">Almacenamiento</p>
          </div>
          <p className="text-3xl font-bold">—</p>
          <p className="text-xs text-slate-400 mt-1">Esperando datos</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="w-5 h-5 text-purple-500" />
            <p className="font-semibold text-sm">Requests</p>
          </div>
          <p className="text-3xl font-bold">0</p>
          <p className="text-xs text-slate-400 mt-1">Hoy</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <LineChart className="w-5 h-5 text-slate-500" />
          <h2 className="font-semibold">Uso del Sistema</h2>
        </div>
        <div className="h-64 flex items-center justify-center text-slate-400">
          <p className="text-sm">Las gráficas aparecerán cuando el DGX Spark esté conectado</p>
        </div>
      </div>
    </div>
  );
}

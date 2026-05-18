import { Users, Plus } from 'lucide-react';

export function UsuariosPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Usuarios</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Invitar Usuario
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
        <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-slate-600 mb-2">Sin usuarios registrados</h2>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Los usuarios administradores podrán gestionar notarías, ver métricas
          y configurar el sistema desde este panel.
        </p>
      </div>
    </div>
  );
}

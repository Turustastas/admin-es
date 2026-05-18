import { Building2, Plus } from 'lucide-react';

export function NotariasPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Notarías</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Añadir Notaría
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
        <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-slate-600 mb-2">Sin notarías registradas</h2>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Las notarías aparecerán aquí cuando se conecten al DGX Spark.
          Cada notaría tendrá su propio espacio aislado con cifrado RGPD.
        </p>
      </div>
    </div>
  );
}

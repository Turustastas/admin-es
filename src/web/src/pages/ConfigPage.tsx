import { Settings, Save } from 'lucide-react';

export function ConfigPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Configuración</h1>

      <div className="space-y-6">
        {/* Conexión DGX */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="font-semibold text-lg mb-4">Conexión DGX Spark</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Host</label>
              <input
                type="text"
                defaultValue="192.168.1.42"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Puerto API</label>
              <input
                type="text"
                defaultValue="4001"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                readOnly
              />
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-3">Configuración local · RGPD · Datos zero出口</p>
        </section>

        {/* Astrea IA */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="font-semibold text-lg mb-4">Astrea IA — Motor de Extracción</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Gateway URL
              </label>
              <input
                type="text"
                defaultValue="http://host.docker.internal:18789"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Token
              </label>
              <input
                type="password"
                placeholder="●●●●●●●●"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </section>

        {/* Botón guardar */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm hover:bg-blue-700 transition-colors">
            <Save className="w-4 h-4" />
            Guardar Configuración
          </button>
        </div>
      </div>
    </div>
  );
}

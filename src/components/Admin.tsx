import React, { useEffect, useState } from 'react';
import { ArrowLeft, MessageSquare, AlertTriangle } from 'lucide-react';

interface Feedback {
  id: number;
  message: string;
  created_at: string;
}

interface Report {
  id: number;
  question_id: string;
  question_text: string;
  message: string;
  created_at: string;
}

interface AdminProps {
  onBack: () => void;
}

export function Admin({ onBack }: AdminProps) {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/messages')
      .then(res => res.json())
      .then(data => {
        setFeedback(data.feedback);
        setReports(data.reports);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center gap-4 border-b border-zinc-800 pb-6">
          <button onClick={onBack} className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
        </div>

        {loading ? (
          <div className="text-center text-zinc-500 py-12">Cargando mensajes...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Feedback Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sky-400 mb-6">
                <MessageSquare className="w-6 h-6" />
                <h2 className="text-2xl font-semibold text-white">Sugerencias ({feedback.length})</h2>
              </div>
              
              {feedback.length === 0 ? (
                <p className="text-zinc-500 italic">No hay sugerencias aún.</p>
              ) : (
                <div className="space-y-4">
                  {feedback.map(f => (
                    <div key={f.id} className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
                      <div className="text-xs text-zinc-500 mb-2">
                        {new Date(f.created_at).toLocaleString()}
                      </div>
                      <p className="text-zinc-300 whitespace-pre-wrap">{f.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Reports Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-red-400 mb-6">
                <AlertTriangle className="w-6 h-6" />
                <h2 className="text-2xl font-semibold text-white">Reportes de Preguntas ({reports.length})</h2>
              </div>
              
              {reports.length === 0 ? (
                <p className="text-zinc-500 italic">No hay reportes aún.</p>
              ) : (
                <div className="space-y-4">
                  {reports.map(r => (
                    <div key={r.id} className="p-4 bg-zinc-900 border border-red-900/30 rounded-2xl">
                      <div className="text-xs text-zinc-500 mb-2 flex justify-between">
                        <span>{new Date(r.created_at).toLocaleString()}</span>
                        <span className="text-red-400 font-mono">ID: {r.question_id}</span>
                      </div>
                      <div className="mb-3 p-3 bg-zinc-950 rounded-xl text-sm text-zinc-400 border border-zinc-800">
                        <span className="font-semibold text-white block mb-1">Pregunta:</span>
                        {r.question_text}
                      </div>
                      <p className="text-zinc-300 whitespace-pre-wrap">
                        <span className="font-semibold text-red-400 block mb-1">Motivo del reporte:</span>
                        {r.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

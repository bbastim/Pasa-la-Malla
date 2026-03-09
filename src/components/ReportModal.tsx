import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Question } from '../types';

interface ReportModalProps {
  question: Question;
  onClose: () => void;
}

export function ReportModal({ question, onClose }: ReportModalProps) {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          questionId: question.id,
          questionText: question.text,
          message 
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');
      
      setStatus('success');
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <h3 className="text-xl font-semibold text-white">Reportar Pregunta</h3>
          <button onClick={onClose} className="p-1 text-zinc-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-300">
            <span className="font-semibold text-white block mb-1">Pregunta reportada:</span>
            {question.text}
          </div>
          
          <p className="text-sm text-zinc-400">
            ¿Cuál es el error en esta pregunta o en sus alternativas? Por favor, detalla el problema.
          </p>
          
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ej: La alternativa correcta debería ser la B porque..."
            className="w-full h-32 p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 resize-none"
            required
          />
          
          {status === 'error' && (
            <p className="text-red-400 text-sm">Hubo un error al enviar el reporte. Inténtalo de nuevo.</p>
          )}
          
          {status === 'success' ? (
            <div className="p-3 bg-green-500/20 border border-green-500/30 text-green-400 rounded-xl text-center font-medium">
              ¡Reporte enviado con éxito!
            </div>
          ) : (
            <button
              type="submit"
              disabled={status === 'submitting' || !message.trim()}
              className="w-full py-3 bg-red-500 hover:bg-red-600 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-medium rounded-xl transition-colors"
            >
              {status === 'submitting' ? 'Enviando...' : 'Enviar Reporte'}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

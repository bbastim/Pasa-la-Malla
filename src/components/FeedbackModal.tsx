import React, { useState } from 'react';
import { X } from 'lucide-react';

interface FeedbackModalProps {
  onClose: () => void;
}

export function FeedbackModal({ onClose }: FeedbackModalProps) {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
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
          <h3 className="text-xl font-semibold text-white">Sugerencias y Comentarios</h3>
          <button onClick={onClose} className="p-1 text-zinc-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <p className="text-sm text-zinc-400">
            ¿Tienes alguna idea para mejorar la app, encontraste un error o quieres proponer algo nuevo? ¡Escríbenos!
          </p>
          
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu comentario aquí..."
            className="w-full h-32 p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 resize-none"
            required
          />
          
          {status === 'error' && (
            <p className="text-red-400 text-sm">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
          )}
          
          {status === 'success' ? (
            <div className="p-3 bg-green-500/20 border border-green-500/30 text-green-400 rounded-xl text-center font-medium">
              ¡Gracias por tu aporte!
            </div>
          ) : (
            <button
              type="submit"
              disabled={status === 'submitting' || !message.trim()}
              className="w-full py-3 bg-sky-500 hover:bg-sky-600 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-medium rounded-xl transition-colors"
            >
              {status === 'submitting' ? 'Enviando...' : 'Enviar Comentario'}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

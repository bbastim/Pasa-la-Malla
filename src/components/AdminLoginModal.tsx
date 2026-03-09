import React, { useState } from 'react';
import { X, Lock } from 'lucide-react';

interface AdminLoginModalProps {
  onSuccess: () => void;
  onClose: () => void;
}

export function AdminLoginModal({ onSuccess, onClose }: AdminLoginModalProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'BomberAdmin') {
      onSuccess();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-white">
            <Lock className="w-5 h-5" />
            <h3 className="text-xl font-semibold">Acceso Restringido</h3>
          </div>
          <button onClick={onClose} className="p-1 text-zinc-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-sm text-zinc-400 text-center mb-4">
            Ingrese la clave de administrador para acceder al panel de control.
          </p>
          
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Contraseña"
            className={`w-full p-3 bg-zinc-950 border rounded-xl text-white placeholder-zinc-500 focus:outline-none transition-colors ${
              error ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-sky-500'
            }`}
            autoFocus
          />
          
          {error && (
            <p className="text-red-400 text-sm text-center">Clave incorrecta.</p>
          )}
          
          <button
            type="submit"
            disabled={!password}
            className="w-full py-3 bg-white text-black font-medium rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

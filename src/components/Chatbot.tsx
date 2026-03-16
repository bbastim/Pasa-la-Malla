import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Loader2, AlertCircle } from 'lucide-react';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: '¡Hola! Soy tu asistente virtual de Pasa la Malla. ¿Tienes alguna duda sobre el material de estudio de Bomberos?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatReady, setIsChatReady] = useState(false);
  const [chatInitError, setChatInitError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (!GEMINI_API_KEY) return;

    import('@google/genai')
      .then(({ GoogleGenAI }) => {
        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
        chatRef.current = ai.chats.create({
          model: 'gemini-3.1-pro-preview',
          config: {
            systemInstruction: 'Eres un experto de Bomberos. Respondes preguntas sobre tácticas, fuego, rescate, comando de incidentes, RCP, HazMat, etc., basándote en los manuales oficiales de Bomberos. Sé claro, preciso, profesional y alentador.',
          }
        });
        setIsChatReady(true);
      })
      .catch((err) => {
        console.error('Chat init error:', err);
        setChatInitError('No se pudo cargar el asistente. Intenta recargar la página.');
      });
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !isChatReady || !chatRef.current) return;

    const userText = input.trim();
    setInput('');
    
    const newUserMsg: Message = { id: Date.now().toString(), role: 'user', text: userText };
    setMessages(prev => [...prev, newUserMsg]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userText });
      
      const newModelMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: response.text || 'Lo siento, no pude generar una respuesta.' 
      };
      
      setMessages(prev => [...prev, newModelMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: 'Hubo un error al conectar con el asistente. Por favor, intenta de nuevo.' 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-2xl h-[80vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Asistente de Estudio</h3>
              <p className="text-xs text-zinc-400">Impulsado por Gemini AI</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-zinc-800">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {!GEMINI_API_KEY ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-4">
            <div className="p-4 bg-yellow-500/10 rounded-full">
              <AlertCircle className="w-10 h-10 text-yellow-500" />
            </div>
            <h4 className="text-lg font-semibold text-white">Asistente no disponible</h4>
            <p className="text-sm text-zinc-400 max-w-sm">
              La API key de Gemini no está configurada. Agrega <code className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-300">GEMINI_API_KEY</code> a tu archivo <code className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-300">.env</code> para habilitar el asistente de estudio.
            </p>
          </div>
        ) : chatInitError ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-4">
            <div className="p-4 bg-red-500/10 rounded-full">
              <AlertCircle className="w-10 h-10 text-red-500" />
            </div>
            <h4 className="text-lg font-semibold text-white">Error al cargar el asistente</h4>
            <p className="text-sm text-zinc-400 max-w-sm">{chatInitError}</p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col min-h-0 relative">
            {!isChatReady && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-950/80 rounded-b-2xl">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
                  <span className="text-sm text-zinc-400">Cargando asistente...</span>
                </div>
              </div>
            )}
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.role === 'user' ? 'bg-sky-500 text-white' : 'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={`max-w-[80%] rounded-2xl p-4 ${
                    msg.role === 'user' 
                      ? 'bg-sky-500 text-white rounded-tr-none' 
                      : 'bg-zinc-800 text-zinc-200 rounded-tl-none border border-zinc-700'
                  }`}>
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="bg-zinc-800 rounded-2xl rounded-tl-none p-4 border border-zinc-700 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                    <span className="text-sm text-zinc-400">Escribiendo...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-950">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu pregunta aquí..."
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  disabled={isLoading || !isChatReady}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || !isChatReady}
                  className="px-4 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-zinc-800 disabled:text-zinc-500 text-white rounded-xl transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, Cpu, Flame, AlertTriangle, Hammer } from 'lucide-react';
import { streamForgeResponse } from '../services/geminiService';

const Hero: React.FC = () => {
  const [ignited, setIgnited] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIgnite = useCallback(async () => {
    setIgnited(true);
    setIsLoading(true);
    setError(null);
    try {
      await streamForgeResponse(
        "Inicia la sesión motivando al usuario a comenzar su transformación ahora mismo. Sé breve e intenso. Al final, invítalo sutilmente a descargar nuestro ebook gratuito.", 
        (chunk) => {
          setResponse(prev => prev + chunk);
          setIsLoading(false); 
        }
      );
    } catch (e: any) {
      console.error("Ignition failed:", e);
      setError("Error de conexión con la Forja.");
      setResponse("\n[Error crítico: La forja no responde. Revisa la consola o tu conexión.]");
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const prompt = input;
    setInput('');
    setResponse(prev => prev + "\n\n> " + prompt + "\n");
    setIsLoading(true);
    setError(null);
    
    try {
      await streamForgeResponse(prompt, (chunk) => {
        setResponse(prev => prev + chunk);
        setIsLoading(false);
      });
    } catch (e: any) {
       console.error("Submission failed:", e);
       setResponse(prev => prev + "\n[Error: Transmisión cortada.]");
       setIsLoading(false);
    }
  }, [input, isLoading]);

  useEffect(() => {
    if (ignited && !isLoading && inputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [ignited, isLoading]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [response]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6 pt-20 pb-12 overflow-hidden">
      
      {/* Title Block */}
      <motion.div 
        layout
        className="text-center z-10 mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center gap-3 mb-4 opacity-70">
          <Hammer size={24} className="text-brand-fire" />
          <span className="text-brand-fire font-mono text-sm tracking-[0.4em] uppercase">Sistema v2.0</span>
          <Hammer size={24} className="text-brand-fire scale-x-[-1]" />
        </div>
        
        <motion.h1 
          className="font-black text-white uppercase leading-[0.85] tracking-tighter"
          animate={{ 
            y: ignited ? -20 : 0,
            scale: ignited ? 0.9 : 1, 
            opacity: ignited ? 0.6 : 1 
          }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-6xl sm:text-8xl md:text-[10rem] bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-600">CONTROL</span>
          <span className="block text-6xl sm:text-8xl md:text-[10rem] text-brand-fire">PODER</span>
          <span className="block text-6xl sm:text-8xl md:text-[10rem] bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-brand-black">FORJA</span>
        </motion.h1>
      </motion.div>

      {/* Interactive Area */}
      <div className="w-full max-w-4xl relative z-20">
        <AnimatePresence mode="wait">
          {!ignited ? (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="text-gray-400 text-lg sm:text-xl font-mono text-center mb-10 max-w-xl">
                // Inicia el protocolo de transformación. <br/>
                // La debilidad será eliminada.
              </p>
              
              <button 
                onClick={handleIgnite}
                className="group relative px-16 py-6 bg-transparent overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-brand-fire/10 group-hover:bg-brand-fire/20 transition-colors skew-x-[-20deg] border border-brand-fire"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-fire shadow-[0_0_20px_#ff4400]"></div>
                
                <span className="relative z-10 flex items-center gap-4 text-white font-black text-xl tracking-[0.25em] group-hover:text-brand-fire transition-colors">
                  <Flame size={24} className="animate-pulse" /> INICIAR
                </span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="w-full"
            >
              {/* Terminal Window */}
              <div className="bg-black border border-brand-fire/50 rounded-sm overflow-hidden shadow-[0_0_80px_rgba(255,68,0,0.15)] flex flex-col h-[60vh] min-h-[450px] relative">
                {/* CRT Effect Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-30 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
                
                {/* Header */}
                <div className="bg-[#0f0f0f] border-b border-white/10 p-3 flex items-center justify-between z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-brand-fire rounded-full animate-pulse shadow-[0_0_10px_#ff4400]"></div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">Terminal_Forja.exe</span>
                  </div>
                  <div className="flex gap-2 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-6 md:p-8 overflow-y-auto font-mono text-sm md:text-base leading-relaxed text-gray-200 z-10 scrollbar-hide">
                  {response ? (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }}
                      className="whitespace-pre-wrap"
                    >
                      <span className="text-brand-fire mr-2">root@forja:~#</span>
                      {response}
                      <motion.span 
                        animate={{ opacity: [0, 1, 0] }} 
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 h-4 bg-brand-fire ml-1 align-middle"
                      />
                    </motion.div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-brand-fire/20 gap-4">
                      <Cpu size={64} strokeWidth={1} />
                      <p className="uppercase tracking-widest text-xs animate-pulse">Estableciendo enlace neuronal...</p>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSubmit} className="p-0 border-t border-brand-fire/30 flex z-20 relative">
                   <div className="relative flex-1 bg-black">
                      <input 
                        ref={inputRef}
                        type="text" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder="Escribe tu comando..." 
                        className="w-full bg-transparent text-brand-fire px-6 py-4 focus:outline-none font-mono text-sm placeholder-gray-800"
                        autoFocus 
                        disabled={isLoading} 
                      />
                   </div>
                   <button 
                    type="submit" 
                    disabled={isLoading || !input.trim()} 
                    className="bg-brand-fire text-black px-8 font-bold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center uppercase tracking-widest text-xs"
                   >
                     {isLoading ? "..." : "ENVIAR"}
                   </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
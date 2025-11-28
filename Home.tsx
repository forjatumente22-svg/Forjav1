import React, { useState } from 'react';
import { 
  Shield, MapPin, ArrowRight, Flame, Hammer, Crown, Users, Target, Zap, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

// --- Subcomponents ---

const ManifestoSection = () => (
  <section className="w-full py-24 px-6 bg-[#050505] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#111] opacity-20 pointer-events-none">
      <Hammer size={400} strokeWidth={0.5} />
    </div>
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-sm text-brand-fire font-bold tracking-[0.3em] uppercase mb-4">Filosofía</h2>
        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
          El Manifiesto del <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-fire to-orange-500">Acero</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Target className="text-brand-fire" size={32} />,
            title: "Disciplina Absoluta",
            desc: "La motivación es combustible barato. La disciplina es el motor que nunca se apaga, incluso en el frío más oscuro."
          },
          {
            icon: <Shield className="text-brand-fire" size={32} />,
            title: "Resiliencia Estoica",
            desc: "No controlas lo que te sucede, solo cómo reaccionas. Convertimos el obstáculo en el camino y el dolor en poder."
          },
          {
            icon: <Crown className="text-brand-fire" size={32} />,
            title: "Soberanía Mental",
            desc: "Tu mente es tu reino. Si no la gobiernas tú con mano de hierro, alguien más lo hará por ti."
          }
        ].map((item, idx) => (
          <article key={idx} className="group p-8 border border-[#222] bg-[#0a0a0a] hover:border-brand-fire transition-colors duration-500 rounded-sm flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-[#111] rounded-full group-hover:scale-110 transition-transform duration-300 border border-[#333] group-hover:border-brand-fire">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">{item.title}</h4>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const AuthoritySection = () => (
  <section className="w-full py-20 px-6 border-y border-white/5 bg-gradient-to-r from-brand-blood to-[#111]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 grayscale contrast-125 hover:grayscale-0 transition-all duration-700 group">
           <div className="absolute inset-0 border-2 border-brand-fire rotate-3 transition-transform group-hover:rotate-6"></div>
           <div className="absolute inset-0 border-2 border-[#333] -rotate-3 bg-[#050505] flex items-center justify-center overflow-hidden transition-transform group-hover:-rotate-6">
              <Users size={120} className="text-gray-800" />
              <div className="absolute bottom-0 w-full bg-brand-fire/10 py-2 text-center text-brand-fire font-bold tracking-widest text-xs uppercase backdrop-blur-sm">
                Fundador
              </div>
           </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-sm text-brand-fire font-bold tracking-[0.3em] uppercase mb-2">Autoridad</h2>
        <h3 className="text-3xl md:text-4xl font-black text-white mb-6">FORJANDO LÍDERES DESDE EL CAOS</h3>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          "No vendo humo, vendo fuego. Durante la última década, he ayudado a emprendedores y atletas a destruir sus límites mentales. Mi método no es para todos; es solo para aquellos dispuestos a quemar su antigua versión."
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-8">
          {[
            { num: "+5k", label: "Mentes Forjadas" },
            { num: "100%", label: "Compromiso" },
            { num: "+10", label: "Años Experiencia" },
            { num: "24/7", label: "Disciplina" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-white">{stat.num}</span>
              <span className="text-xs text-brand-fire uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="w-full py-24 px-6 bg-brand-black">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm text-brand-fire font-bold tracking-[0.3em] uppercase mb-4">El Arsenal</h2>
        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
          Servicios de <span className="text-white">Alto Nivel</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="group relative p-8 bg-[#0a0a0a] border border-[#222] hover:border-brand-fire transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
             <Zap className="text-brand-fire" size={40} />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">La Chispa (Ebook)</h4>
          <p className="text-brand-fire font-mono text-sm mb-6">INICIACIÓN</p>
          <p className="text-gray-400 text-sm mb-8">Guía táctica de 50 páginas para reiniciar tu sistema de creencias.</p>
          <Link to="/descarga-ebook" className="w-full block text-center py-3 border border-[#333] text-gray-300 hover:bg-brand-fire hover:text-black hover:border-brand-fire transition-colors font-bold text-sm tracking-wider uppercase">
            Conseguir Gratis
          </Link>
        </div>
        {/* Service 2 (Featured) */}
        <div className="group relative p-8 bg-[#0a0a0a] border border-brand-fire shadow-[0_0_20px_rgba(255,68,0,0.1)] transform md:scale-105 z-10">
          <div className="absolute top-0 w-full left-0 bg-brand-fire text-black text-center text-xs font-bold py-1 tracking-widest uppercase">
            Más Solicitado
          </div>
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity mt-6">
             <Hammer className="text-brand-fire" size={40} />
          </div>
          <h4 className="text-2xl font-bold text-white mb-2 mt-4">Método Forja (90 Días)</h4>
          <p className="text-brand-fire font-mono text-sm mb-6">TRANSFORMACIÓN TOTAL</p>
          <p className="text-gray-400 text-sm mb-8">Programa intensivo de 12 semanas. Mentoría 1:1, plan de acción y comunidad.</p>
          <Link to="/metodo" className="w-full block text-center py-4 bg-brand-fire text-black hover:bg-white transition-colors font-bold text-sm tracking-wider uppercase shadow-lg shadow-brand-fire/20">
            Ver Programa
          </Link>
        </div>
        {/* Service 3 */}
        <div className="group relative p-8 bg-[#0a0a0a] border border-[#222] hover:border-brand-fire transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
             <Award className="text-brand-fire" size={40} />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Aula Digital</h4>
          <p className="text-brand-fire font-mono text-sm mb-6">FORMACIÓN CONTINUA</p>
          <p className="text-gray-400 text-sm mb-8">Acceso vitalicio a cursos sueltos y bootcamps grabados.</p>
          <Link to="/aula" className="w-full block text-center py-3 border border-[#333] text-gray-300 hover:bg-brand-fire hover:text-black hover:border-brand-fire transition-colors font-bold text-sm tracking-wider uppercase">
            Explorar Cursos
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const LeadMagnetSection = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="w-full py-24 px-6 border-t border-white/10 bg-gradient-to-b from-brand-black to-brand-blood overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left: Copy */}
        <div className="flex-1 text-center md:text-left z-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-fire/10 border border-brand-fire rounded-full text-brand-fire text-xs font-bold uppercase tracking-widest mb-6">
              <Flame size={12} fill="currentColor" /> Gratis por tiempo limitado
           </div>
           <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none tracking-tighter">
             DOMINA LA <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-fire to-yellow-600">PROCRASTINACIÓN</span> <br/>EN 72 HORAS
           </h3>
           <p className="text-gray-400 text-lg mb-8 leading-relaxed">
             No es falta de tiempo, es falta de enfoque. Descarga el manual táctico que ha ayudado a más de 2,000 personas a recuperar el control de su vida sin "trucos" baratos.
           </p>
           
           <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
             <input 
               type="email" 
               placeholder="Ingresa tu mejor email..." 
               className="flex-1 bg-[#111] border border-[#333] text-white px-4 py-3 focus:border-brand-fire focus:outline-none"
             />
             <Link to="/descarga-ebook" className="bg-brand-fire hover:bg-brand-fire-dim text-black font-bold px-6 py-3 uppercase tracking-wider transition-all flex items-center justify-center gap-2">
               Descargar <ArrowRight size={18} />
             </Link>
           </form>
           <p className="mt-4 text-xs text-gray-600">
             <Lock size={10} className="inline mr-1"/> Tus datos están blindados.
           </p>
        </div>

        {/* Right: 3D Book Mockup (CSS Only) */}
        <div className="flex-1 flex justify-center perspective-1000">
          <div className="relative w-[240px] h-[360px] bg-[#0a0a0a] border-r-4 border-b-4 border-[#111] shadow-[20px_20px_60px_rgba(255,68,0,0.15)] transform rotate-y-[-15deg] rotate-x-[5deg] transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0 group">
             {/* Book Cover */}
             <div className="absolute inset-0 bg-[#000] border border-[#333] flex flex-col items-center justify-between p-6 overflow-hidden">
                <div className="w-full text-center border-b border-brand-fire pb-4">
                   <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Manual Táctico</p>
                </div>
                <div className="text-center">
                   <h4 className="text-3xl font-black text-white uppercase leading-none mb-1">Anti</h4>
                   <h4 className="text-3xl font-black text-brand-fire uppercase leading-none">Pereza</h4>
                </div>
                <div className="w-full flex justify-between items-end">
                   <Users size={20} className="text-gray-700" />
                   <div className="h-8 w-8 bg-brand-fire rounded-full opacity-20 group-hover:opacity-100 transition-opacity blur-md"></div>
                </div>
                {/* Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
             </div>
             {/* Pages Effect */}
             <div className="absolute top-1 bottom-1 -right-3 w-3 bg-[#ddd] transform skew-y-[45deg] border-l border-gray-400"></div>
             <div className="absolute -bottom-3 left-1 right-1 h-3 bg-[#ccc] transform skew-x-[45deg] border-t border-gray-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => (
  <section className="w-full relative min-h-[500px] flex flex-col md:flex-row border-t border-white/10">
    <div className="w-full md:w-2/3 h-[400px] md:h-auto bg-[#111] relative overflow-hidden grayscale invert contrast-[1.1] brightness-[0.8]">
       <iframe 
         width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} 
         src="https://maps.google.com/maps?q=Calle+Aurora+5,+03203+Elche,+Alicante&t=&z=15&ie=UTF8&iwloc=&output=embed"
         title="Ubicación de La Fragua"
         style={{ filter: 'grayscale(100%) invert(100%)' }}
       ></iframe>
       <div className="absolute inset-0 bg-brand-fire mix-blend-overlay opacity-10 pointer-events-none"></div>
    </div>
    <div className="w-full md:w-1/3 bg-brand-blood p-10 flex flex-col justify-center border-l border-white/5 relative z-10">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest flex items-center gap-2">
          <MapPin className="text-brand-fire" /> La Fragua Física
        </h3>
        <div className="h-0.5 w-12 bg-brand-fire mt-4"></div>
      </div>
      <address className="not-italic text-gray-400 space-y-4 mb-8">
        <p className="text-lg text-white">Calle Aurora, 5</p>
        <p>03203 Elche (Alicante)</p>
        <p>España</p>
      </address>
      <div className="space-y-4">
        <a href="https://maps.google.com/maps?q=Calle+Aurora+5,+03203+Elche,+Alicante" target="_blank" rel="noopener noreferrer" className="inline-block text-brand-fire border-b border-brand-fire hover:text-white hover:border-white transition-colors pb-1">
          Ver en Google Maps &rarr;
        </a>
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ManifestoSection />
      <AuthoritySection />
      <ServicesSection />
      <LeadMagnetSection />
      <LocationSection />
    </>
  );
};

export default Home;
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function DetallePersonaje() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then(peticion => peticion.json())
      .then(datos => {
        setPersonaje(datos);
        setCargando(false);
      })
      .catch(() => setCargando(false));
  }, [id]);

  if (cargando) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950">
        <div className="w-20 h-20 border-4 border-orange-500 border-t-yellow-400 rounded-full animate-spin"></div>
        <p className="mt-4 text-orange-500 font-black italic uppercase animate-pulse">Cargando datos del guerrero...</p>
    </div>
  );

  if (!personaje) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
        <p className="text-3xl font-black text-red-600 italic uppercase">¡Guerrero no encontrado!</p>
        <button onClick={() => navigate("/")} className="mt-8 bg-orange-600 px-6 py-2 rounded-lg font-bold">Volver al inicio</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden flex items-center justify-center bg-gradient-to-b from-blue-900 to-gray-950 border-b-4 border-orange-500">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        <img
          className="h-[90%] object-contain drop-shadow-[0_20px_50px_rgba(251,146,60,0.4)] z-10"
          src={personaje.image}
          alt={personaje.name}
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-950 to-transparent z-20">
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-yellow-400 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-center">
                {personaje.name}
            </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Info Sidebar */}
        <div className="bg-blue-900/30 p-8 rounded-3xl border-2 border-orange-500/50 backdrop-blur-sm h-fit">
            <h3 className="text-2xl font-black italic uppercase text-orange-400 mb-6 border-b-2 border-orange-500/30 pb-2">Estadísticas</h3>
            <div className="space-y-6">
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Raza</p>
                    <p className="text-xl font-black italic text-white uppercase">{personaje.race}</p>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Género</p>
                    <p className="text-xl font-black italic text-white uppercase">{personaje.gender === "Female" ? "Femenino" : "Masculino"}</p>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Ki Actual</p>
                    <p className="text-2xl font-black italic text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">{personaje.ki}</p>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Ki Máximo</p>
                    <p className="text-2xl font-black italic text-orange-500">{personaje.maxKi}</p>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Afiliación</p>
                    <p className="text-xl font-black italic text-white uppercase">{personaje.affiliation}</p>
                </div>
            </div>
        </div>

        {/* Description & Transformations */}
        <div className="lg:col-span-2 space-y-12">
            <section>
                <h3 className="text-3xl font-black italic uppercase text-yellow-400 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm italic">i</span>
                    Historia
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-orange-500 first-letter:mr-3 first-letter:float-left">
                    {personaje.description}
                </p>
            </section>

            <section>
                <h3 className="text-3xl font-black italic uppercase text-yellow-400 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm italic">★</span>
                    Transformaciones
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {personaje.transformations?.length > 0 ? (
                    personaje.transformations.map((t, index) => (
                        <article key={index} className="bg-gradient-to-br from-blue-900 to-blue-950 p-4 rounded-2xl border-2 border-blue-500/30 hover:border-orange-500 transition-all group">
                        <div className="h-48 flex items-center justify-center mb-4">
                            <img
                            src={t.image}
                            alt={t.name}
                            className="max-h-full object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl font-black italic uppercase text-white group-hover:text-yellow-400 transition-colors">{t.name}</h4>
                            <p className="text-orange-400 font-bold text-sm mt-1">Ki: {t.ki}</p>
                        </div>
                        </article>
                    ))
                    ) : (
                    <div className="col-span-full bg-orange-900/20 border-2 border-orange-500/30 p-8 rounded-2xl text-center">
                        <span className="text-orange-400 font-black italic text-xl uppercase tracking-tighter">Este guerrero no posee transformaciones registradas</span>
                    </div>
                    )}
                </div>
            </section>
        </div>
      </div>
      
      <div className="flex justify-center mt-16">
          <button 
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-black uppercase italic tracking-tighter px-10 py-4 rounded-full border-b-4 border-red-800 active:border-b-0 active:translate-y-1 transition-all shadow-[0_10px_20px_rgba(220,38,38,0.4)]"
          >
              Volver a la selección de guerreros
          </button>
      </div>
    </div>
  );
}
import { useNavigate } from "react-router-dom";

export function Tarjeta({ id, nombre, raza, imagen, genero, ki }) {
    const navigate = useNavigate();

    return (
        <article className="bg-gradient-to-b from-blue-900 to-blue-950 text-white cursor-pointer rounded-2xl border-2 border-orange-500 shadow-[0_5px_15px_rgba(0,0,0,0.4)] overflow-hidden w-80 hover:scale-105 hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] transition-all duration-300 relative group">
            {/* Dragon Ball accent */}
            <div className="absolute top-0 right-0 bg-orange-500 text-white font-black px-3 py-1 rounded-bl-xl shadow-md z-10 border-b-2 border-l-2 border-yellow-400">
                #{id}
            </div>

            <div className="w-full h-64 flex items-center justify-center p-4 bg-white/5 group-hover:bg-white/10 transition-colors">
                <img
                    src={imagen}
                    alt={nombre}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transform group-hover:rotate-2 group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-5 flex flex-col gap-3 border-t-2 border-orange-500/30">
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-yellow-400 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
                    {nombre}
                </h2>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-orange-200">
                        <span>Raza:</span>
                        <span className="text-white bg-orange-800/50 px-2 py-0.5 rounded border border-orange-500/30">{raza}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-orange-200">
                        <span>Género:</span>
                        <span className="text-white">{genero === "Female" ? "Femenino" : "Masculino"}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-orange-200">
                        <span>Ki:</span>
                        <span className="text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">{ki}</span>
                    </div>
                </div>

                <button
                    onClick={() => navigate(`/personaje/${id}`)}
                    className="mt-2 w-full bg-orange-600 hover:bg-orange-500 text-white font-black uppercase italic tracking-tighter py-2.5 rounded-xl border-b-4 border-orange-800 active:border-b-0 active:translate-y-1 transition-all shadow-lg shadow-orange-900/40"
                >
                    Más Información
                </button>
            </div>
        </article>
    );
}
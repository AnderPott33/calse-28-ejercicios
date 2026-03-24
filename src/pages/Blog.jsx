import { useState, useEffect } from "react";
export function Blog() {
    const [publicaciones, setPublicaciones] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);
        fetch('http://localhost/clase-28/ws.php')
            .then((p) => p.json())
            .then(blog => {
                setPublicaciones(blog);
                setCargando(false);
            })
            .catch(err => {
                console.error("Error al cargar el blog:", err);
                setCargando(false);
            });
    }, [])

    return (
        <div className="min-h-screen bg-gray-950 py-12 px-4">
            <header className="max-w-4xl mx-auto mb-16 text-center">
                <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                    Crónicas Saiyajin
                </h1>
                <p className="mt-6 text-xl text-gray-400 font-medium italic">
                    Explora la historia de las sagas más legendarias del universo.
                </p>
                <div className="mt-4 flex justify-center gap-2">
                    <span className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full animate-ping delay-75"></span>
                    <span className="w-3 h-3 bg-blue-500 rounded-full animate-ping delay-150"></span>
                </div>
            </header>

            {cargando ? (
                <div className="flex justify-center items-center h-64">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {publicaciones.map((pub, index) => (
                        <article key={pub.id || index} className="group relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-3xl border-2 border-gray-800 hover:border-orange-500 transition-all duration-500 overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-600/10 rounded-full blur-2xl group-hover:bg-orange-600/20 transition-all"></div>
                            
                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 text-xs font-black uppercase tracking-widest rounded-full border border-blue-500/30 mb-4">
                                    {pub.saga}
                                </span>
                                
                                <h2 className="text-2xl font-black italic uppercase text-white mb-4 leading-tight group-hover:text-yellow-400 transition-colors">
                                    {pub.titulo}
                                </h2>
                                
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-full flex items-center justify-center font-black text-orange-950 shadow-lg">
                                        {pub.personaje_principal[0]}
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold">Protagonista</p>
                                        <p className="text-sm text-gray-200 font-black italic uppercase">{pub.personaje_principal}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-gray-400 text-sm italic font-medium">
                                        <span className="text-orange-500">#</span> {pub.tema_central}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                                        {pub.descripcion_corta}
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-800 flex justify-end">
                                    <button className="text-orange-500 font-black italic uppercase text-sm tracking-tighter hover:text-yellow-400 transition-colors flex items-center gap-2">
                                        Leer saga completa <span>➜</span>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            )}
        </div>
    );
}
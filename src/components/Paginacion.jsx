// Paginacion.jsx
export function Paginacion({ paginaActual, cantidadTotal, setPagina }) {
    const paginas = Array.from({ length: cantidadTotal }, (_, i) => i + 1);

    return (
        <div className="flex flex-col items-center gap-4 my-8">
            <ul className="flex justify-center items-center flex-wrap gap-4 px-4">
                {paginas.map(num => (
                    <li
                        key={num}
                        onClick={() => setPagina(num)}
                        className={`
                            relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer 
                            font-black text-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300
                            border-2 border-orange-800
                            ${paginaActual === num 
                                ? "bg-gradient-to-tr from-orange-400 to-yellow-300 text-orange-900 scale-125 z-10 border-yellow-500 shadow-[0_0_20px_rgba(250,204,21,0.6)]" 
                                : "bg-gradient-to-tr from-orange-600 to-orange-400 text-white hover:scale-110 hover:border-yellow-400"
                            }
                        `}
                    >
                        {num}
                        {/* Decorative stars effect for active page */}
                        {paginaActual === num && (
                            <span className="absolute -top-1 -right-1 text-xs">⭐</span>
                        )}
                    </li>
                ))}
            </ul>
            <div className="bg-blue-900/60 backdrop-blur-sm border-l-4 border-yellow-400 px-6 py-2 rounded-r-full shadow-lg">
                <span className="text-white italic font-bold tracking-wide">
                    Saga de páginas: <span className="text-yellow-400 text-xl font-black">{paginaActual}</span> / <span className="text-orange-400">{cantidadTotal}</span>
                </span>
            </div>
        </div>
    );
}
// Paginacion.jsx
export function Paginacion({ paginaActual, cantidadTotal, setPagina }) {
    const paginas = Array.from({ length: cantidadTotal }, (_, i) => i + 1);

    return (
        <>
            <ul className="flex justify-center items-center gap-3">
                {paginas.map(num => (
                    <li
                        key={num}
                        onClick={() => setPagina(num)}
                        className={`border-2 border-gray-300 rounded-full cursor-pointer text-white font-bold w-8 h-8 text-center hover:bg-blue-700 ${paginaActual === num ? "bg-blue-700" : "bg-blue-500"
                            }`}
                    >
                        {num}
                    </li>
                ))}
            </ul>
            <div className="text-center mt-2 text-white">
                <span className="italic">Tenemos un total de <span className="font-semibold text-blue-300">{cantidadTotal}</span> páginas!</span>
            </div>
        </>
    );
}
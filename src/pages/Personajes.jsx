import { useState, useEffect } from "react";
import { Tarjeta } from "../components/Tarjeta.jsx";
import { Paginacion } from "../components/Paginacion.jsx";

export function Personajes() {
    const [personajeList, setPersonajeList] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);
        fetch(`https://dragonball-api.com/api/characters?page=${pagina}&limit=12`)
            .then(peticion => peticion.json())
            .then(datos => {
                setPersonajeList(datos.items);
                setTotalPaginas(datos.meta.totalPages);
                setCargando(false);
            })
            .catch(err => {
                console.error(err);
                setCargando(false);
            });
    }, [pagina]);

    return (
        <div className="min-h-screen bg-gray-950 py-10 px-4">
            <header className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-orange-500 to-red-600 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] inline-block">
                    Guerreros Z
                </h2>
                <div className="h-1 w-48 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-4"></div>
                <p className="mt-6 text-gray-400 font-bold uppercase tracking-[0.2em] text-sm">
                    Explora el poder de los luchadores más fuertes del universo
                </p>
            </header>

            {cargando ? (
                <div className="flex flex-col items-center justify-center h-64">
                    <div className="w-16 h-16 border-4 border-orange-500 border-t-yellow-400 rounded-full animate-spin"></div>
                    <p className="mt-4 text-orange-500 font-black italic uppercase animate-pulse">Cargando Ki...</p>
                </div>
            ) : (
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-8 mb-16">
                        {personajeList.map((personaje) => (
                            <Tarjeta
                                key={personaje.id}
                                id={personaje.id}
                                nombre={personaje.name}
                                raza={personaje.race}
                                imagen={personaje.image}
                                genero={personaje.gender}
                                ki={personaje.ki}
                                maxKi={personaje.maxKi}
                            />
                        ))}
                    </div>

                    <Paginacion
                        paginaActual={pagina}
                        cantidadTotal={totalPaginas}
                        setPagina={setPagina}
                    />
                </div>
            )}
        </div>
    );
}
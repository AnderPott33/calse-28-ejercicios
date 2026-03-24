import { useState, useEffect } from "react";
import { obtener, guardar } from "../data/almacenamiento.js";
import { obtenerDatos } from "../data/llamadas.js"; // tu fetch a la API
import { Tarjeta } from "../components/Tarjeta.jsx";
import { Paginacion } from "../components/Paginacion.jsx";

export function Personajes() {
    const [personajeList, setPersonajeList] = useState([]);
    const [pagina, setPagina] = useState(1)
    const [totalPaginas, setTotalPaginas] = useState(0)

    useEffect(() => {
        const dataGuardada = JSON.parse(obtener("personajes"));
        if (dataGuardada && dataGuardada.length > 0) {
            setPersonajeList(dataGuardada);
        } else {
            obtenerDatos().then((data) => {
                setPersonajeList(data);
                guardar("personajes", JSON.stringify(data));
            });
        }
    }, []);

    useEffect(() => {
        fetch(`https://dragonball-api.com/api/characters?page=${pagina}&limit=10`)
            .then(peticion => peticion.json())
            .then(datos => {
                setPersonajeList(datos.items);
                setTotalPaginas(datos.meta.totalPages);
            })
            .catch(err => console.error(err));
    }, [pagina]);

    return <>
        <div className="flex flex-wrap justify-center gap-4 p-4">
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
    </>
}
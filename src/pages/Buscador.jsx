import { useState, useRef } from 'react';
import { obtener } from '../data/almacenamiento.js';
import { Tarjeta } from '../components/Tarjeta.jsx';
import Swal from 'sweetalert2'

export function Buscador() {
    const [busqueda, setBusqueda] = useState('');
    const [personajeList, setPersonajeList] = useState(JSON.parse(obtener("personajes")) || []);
    const [misPersonajes, setMisPersonajes] = useState([])
    const [personaje, setPersonaje] = useState({
        id: 0,
        name: "",
        image: "",
        race: "",
        gender: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const obtenido = personajeList.find((p) =>
            p.name.toLowerCase().includes(busqueda.toLowerCase())
        );

        if (obtenido) {
            // Verifica si ya está en la lista
            const yaExiste = misPersonajes.some(p => p.id === obtenido.id);

            if (yaExiste) {
                Swal.fire({
                    text: `${obtenido.name} ya está en tu lista!`,
                    icon: "info",
                    showConfirmButton: false,
                    timer: 2000,
                    background: "#1e2939",
                    color: "#fff",
                });
            } else {
                Swal.fire({
                    text: `Hemos añadido a ${obtenido.name} a la lista`,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2500,
                    background: "#1e2939",
                    color: "#fff",
                });
                setMisPersonajes([...misPersonajes, obtenido]);
            }

            setPersonaje({ ...obtenido });
            setBusqueda(''); // limpia el input
        } else {
            Swal.fire({
                text: `No hemos encontrado el personaje buscado!`,
                icon: "question",
                showConfirmButton: false,
                timer: 2500,
                background: "#1e2939",
                color: "#fff",
            });
            setPersonaje({
                id: 0,
                name: "",
                image: "",
                race: "",
                gender: ""
            });
            setBusqueda(''); // limpia el input
        }
    };

    return (
        <>
            <div className='flex justify-center items-top p-3 text-center'>
                <form onSubmit={handleSubmit} className='' role='search'>
                    <h1 className='text-white mb-2 font-bold text-3xl'>Buscador de Personajes</h1>
                    <input
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className='bg-gray-300 p-2 m-2 rounded-lg text-black border-2 border-blue-500 focus:outline-none focus:border-blue-700 focus:bg-gray-400'
                        type="text"
                    />
                    <button
                        type="submit"
                        className='bg-blue-500 hover:bg-blue-700 text-white cursor-pointer p-2 rounded-lg'
                    >
                        Buscar y Agregar
                    </button>
                </form>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-4 mt-8'>
                {misPersonajes.map(
                    function (individuo) {
                        return (
                            <Tarjeta
                                key={individuo.id}
                                id={individuo.id}
                                nombre={individuo.name}
                                raza={individuo.race}
                                imagen={individuo.image}
                                genero={individuo.gender}
                                ki={individuo.ki}
                                maxKi={individuo.maxKi}
                                setMisPersonajes={setMisPersonajes} />
                        )
                    }
                )

                }
                {/*   {personaje.name && (
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
                )} */}
            </div>
        </>
    )
}
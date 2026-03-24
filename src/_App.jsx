import { useState } from 'react';
import './index.css'
import personajes from './data/personajes.json';
import { guardar, obtener, limpiar } from './data/almacenamiento.js';

export function App() {

  function btnLimpiar() {
    limpiar()
    window.location.reload()
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-green-500 text-center p-4">
        API: RICK AND MORTY
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 m-2 rounded-lg" onClick={btnLimpiar}>Limpiar</button>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
        {personajes.map((personaje) => {
          const { id, name: nombre, image: imagen, species: raza, status: condicion } = personaje;
          return (
            <Tarjeta
              key={id}
              nombre={nombre}
              imagen={imagen}
              raza={raza}
              condicion={condicion} // <-- aqui!
            />
          );
        })}
      </div>
    </>
  );
}

export const Tarjeta = ({ nombre, imagen, raza, condicion }) => {
  // Inicializa com localStorage ou valor padrão do API
  const [estado, cambiarEstado] = useState(() => obtener(nombre) || condicion);


  function handleClick() {
    const nuevoEstado = estado === "Alive" ? "Dead" : "Alive";
    cambiarEstado(nuevoEstado);
    guardar(nombre, nuevoEstado);
  }

  return (
    estado == "Alive" &&
    <article className="bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden w-80 hover:scale-105 transition-transform duration-300">
      <div className="w-full h-56 overflow-hidden">
        <img src={imagen} alt={nombre} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold">{nombre}</h2>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span
            className={`w-3 h-3 rounded-full ${estado === "Alive" ? "bg-green-500" : "bg-red-500"
              }`}
          ></span>
          <span>{estado === "Alive" ? "Vivo" : "Muerto"} - {raza}</span>
        </div>
        <button
          onClick={handleClick}
          className="bg-purple-500 p-2 hover:bg-purple-700 rounded-lg"
        >
          Cambio de estado
        </button>
      </div>
    </article>
  );
};


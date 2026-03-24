import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tarjeta } from "../components/Tarjeta.jsx";

export function DetallePersonaje() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({})

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then(peticion => peticion.json())
      .then(datos => {
        setPersonaje(datos)
      })
  }, [id])
  const transformaciones = JSON.stringify(personaje.transformations)
  console.log(transformaciones, id);


  return (
    <div className="flex flex-col items-center p-4">

      <h1 className="text-3xl font-bold text-white mb-4">
        {personaje.name}
      </h1>

      {personaje ? (
        <div className="max-w-xl text-center">

          <div className="flex justify-center items-center min-h-[150px] p-2">
            <img
              className="w-[120px] object-contain"
              src={personaje.image}
              alt={personaje.name}
            />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            {personaje.description}
          </p>
        </div>
      ) : (
        <p className="text-red-400">Personaje no encontrado</p>
      )}
      <div className="m-3 w-full flex flex-col justify-center items-center">
        <hr className="w-full text-white my-4" />
        <h3 className="text-gray-400 text-2xl font-bold">Transformaciones</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {personaje.transformations?.length > 0 ? (
          personaje.transformations.map((t, index) => (
            <article key={index} className="bg-gray-800 text-white cursor-pointer rounded-2xl shadow-lg overflow-hidden w-72 sm:w-80 md:w-96 lg:w-80 transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-56 flex items-center justify-center bg-gray-800">
                <img
                  src={t.image}
                  alt={t.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-500 p-1 w-8 h-8 text-center font-semibold text-white rounded-full">{id}</span>
                  <h2 className="text-xl font-bold">{t.name}</h2>
                </div>
                <div>
                  <span className="text-sm text-gray-300">Ki: {t.ki}</span>
                  <hr className="border-gray-600 mt-1" />
                </div>
              </div>
            </article>
          ))
        ) : (
          <span className="bg-red-600 rounded-lg p-2 text-white font-semibold text-2xl italic shadow-red-300 shadow-md">Este personaje no tiene transformaciones!</span>
        )}
      </div>
    </div>
  );
}
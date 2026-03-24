import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function Tarjeta({ id, nombre, raza, imagen, genero, ki }) {
    const navigate = useNavigate();
/*     const handleEliminar = () => {
        Swal.fire({
            text: `El personaje ${nombre} será eliminado`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
            background: "#1e2939",
            color: "#fff",
        }).then((result) => {
            if (result.isConfirmed) {
                setMisPersonajes((actual) => actual.filter((e) => e.id !== id));

                Swal.fire({
                    text: "¡Personaje eliminado!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                    background: "#1e2939",
                    color: "#fff",
                });
            }
        }); 
    };*/
    return (
        <article className="bg-gray-800 text-white hover:bg-gray-900 cursor-pointer rounded-2xl shadow-lg overflow-hidden w-80 hover:scale-105 transition-transform duration-300">

            <div className="w-full h-56 flex items-center justify-center">
                <img
                    src={imagen}
                    alt={nombre}
                    className="max-h-full max-w-full object-contain"
                />
            </div>

            <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-left gap-2">
                    <span className="bg-blue-500 p-1 w-8 h-8 text-center font-semibold text-white rounded-full">{id}</span>
                    <h2 className="text-xl font-bold">{nombre}</h2>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span>{genero === "Female" ? "Femenino" : "Masculino"}</span>
                </div>
                <div>
                    <span>Ki: {ki}</span>
                    <hr className="w-full text-white" />
                    {/* <span>Ki Max: {maxKi}</span>
                    <hr className="w-full text-white" /> */}
                </div>

                <div className="flex justify-around items-center">
                    <p className="text-sm text-gray-400">Raza: {raza}</p>
                    <button
                        onClick={() => navigate(`/personaje/${id}`)}
                        className="bg-green-500 hover:bg-green-600 font-semibold cursor-pointer text-[#1e2939] p-1 rounded-lg"
                    >
                       Más Información
                    </button>
                    {/* <button
                        onClick={handleEliminar}
                        className="bg-red-600 hover:bg-red-700 font-semibold cursor-pointer text-white p-1 rounded-lg"
                    >
                        Eliminar
                    </button> */}
                </div>
            </div>
        </article>
    );
}
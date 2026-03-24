import { useState } from "react";
import Swal from "sweetalert2";

export function Contacto() {
    const [cargando, setCargando] = useState(false);
    const urlAPI = `http://localhost:4002/datos`;/* 'https://jsonplaceholder.typicode.com/posts' */;

    const [mensajes, setMensajes] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCargando(true)

        const usar = new FormData(e.target);

        const formulario = {
            title: usar.get("correo"),
            body: usar.get("mensaje")
        };

        try {
            // POST
            await fetch(urlAPI, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formulario)
            });

            // GET para actualizar la lista de mensajes
            const consulta = await fetch(urlAPI);
            const datos = await consulta.json();
            setMensajes(datos);
            setCargando(false);

            Swal.fire({
                title: "¡MENSAJE ENVIADO!",
                icon: "success",
                background: "#1a202c",
                color: "#fff",
                confirmButtonColor: "#ea580c",
                confirmButtonText: "¡ENTENDIDO!"
            });

            e.target.reset();

        } catch (error) {
            setCargando(false);
            console.error("Error enviando mensaje:", error);
            Swal.fire({
                title: "Error",
                text: "No se pudo enviar el mensaje.",
                icon: "error",
                background: "#1a202c",
                color: "#fff",
                confirmButtonColor: "#ea580c",
            });
        }
    };

    return (<>
        {cargando ? (
            <div className="min-h-screen flex flex-col items-center justify-center h-64">
                <div className="w-16 h-16 border-4 border-orange-500 border-t-yellow-400 rounded-full animate-spin"></div>
                <p className="mt-4 text-orange-500 font-black italic uppercase animate-pulse">Cargando Ki...</p>
            </div>
        ) : (<div className="min-h-screen bg-gray-950 p-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* FORMULARIO */}
                <div className="bg-gradient-to-b from-blue-900 to-blue-950 p-10 rounded-3xl border-4 border-orange-500 shadow-[0_0_30px_rgba(234,88,12,0.3)] relative overflow-hidden">

                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-xl"></div>

                    <header className="text-center mb-10 relative z-10">
                        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-yellow-400 drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">
                            Contactar Administrador
                        </h1>
                        <p className="text-orange-200 mt-2 font-bold uppercase text-xs tracking-[0.2em]">
                            Envía tu consulta al cuartel general
                        </p>
                    </header>

                    <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-white font-black italic uppercase text-sm ml-1">
                                Título
                            </label>
                            <input
                                required
                                className="w-full p-4 rounded-xl bg-gray-900/50 border-2 border-blue-500/30 text-white focus:border-orange-500"
                                type="text"
                                name="correo"
                                placeholder="Asunto del mensaje"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-white font-black italic uppercase text-sm ml-1">
                                Mensaje
                            </label>
                            <textarea
                                required
                                rows="4"
                                className="w-full p-4 rounded-xl bg-gray-900/50 border-2 border-blue-500/30 text-white focus:border-orange-500 resize-none"
                                name="mensaje"
                                placeholder="Escribe tu mensaje..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-orange-600 hover:bg-orange-500 text-white font-black uppercase py-4 rounded-2xl border-b-4 border-orange-800 active:translate-y-1"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                </div>

                {/* LISTA DE MENSAJES */}
                <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800 shadow-lg overflow-y-auto max-h-[80vh]">

                    <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                        Mensajes enviados
                    </h2>

                    {mensajes.length === 0 ? (
                        <p className="text-gray-500 text-sm">
                            Aún no hay mensajes...
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {mensajes.map((m, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-orange-500 transition"
                                >
                                    <h3 className="font-bold text-orange-400 mb-1">
                                        {m.titulo}
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        {m.cuerpo}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
        )}
    </>
    );
}
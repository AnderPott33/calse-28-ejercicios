import Swal from "sweetalert2";

export function Contacto() {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        Swal.fire({
            title: "¡MENSAJE ENVIADO!",
            text: "Tu mensaje ha sido enviado con éxito por la nube voladora.",
            icon: "success",
            background: "#1a202c",
            color: "#fff",
            confirmButtonColor: "#ea580c",
            confirmButtonText: "¡ENTENDIDO!",
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZndqZ3J6ZndqZ3J6ZndqZ3J6ZndqZ3J6ZndqZ3J6ZndqJnB2PTA/3o7TKuylOmREawBWko/giphy.gif")
                left top
                no-repeat
            `
        });
        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
            <div className="bg-gradient-to-b from-blue-900 to-blue-950 w-full max-w-lg p-10 rounded-3xl border-4 border-orange-500 shadow-[0_0_30px_rgba(234,88,12,0.3)] relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-xl"></div>
                
                <header className="text-center mb-10 relative z-10">
                    <h1 className="text-4xl font-black italic uppercase tracking-tighter text-yellow-400 drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">
                        Contactar Administrador
                    </h1>
                    <p className="text-orange-200 mt-2 font-bold uppercase text-xs tracking-[0.2em]">Envía tu consulta al cuartel general</p>
                </header>

                <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-white font-black italic uppercase tracking-wider text-sm ml-1" htmlFor="correo">
                            Tu Correo Electrónico
                        </label>
                        <input 
                            required
                            className="w-full p-4 rounded-xl bg-gray-900/50 border-2 border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all shadow-inner" 
                            type="email" 
                            name="correo" 
                            id="correo" 
                            placeholder="goku@capsulecorp.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-white font-black italic uppercase tracking-wider text-sm ml-1" htmlFor="mensaje">
                            Escribe tu consulta
                        </label>
                        <textarea 
                            required
                            rows="4"
                            className="w-full p-4 rounded-xl bg-gray-900/50 border-2 border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all shadow-inner resize-none" 
                            name="mensaje" 
                            id="mensaje"
                            placeholder="¿Cómo puedo convertirme en Super Saiyajin?"
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="mt-4 bg-orange-600 hover:bg-orange-500 text-white font-black uppercase italic tracking-tighter py-4 rounded-2xl border-b-4 border-orange-800 active:border-b-0 active:translate-y-1 transition-all shadow-lg shadow-orange-950/40"
                    >
                        Enviar mensaje al Maestro Roshi
                    </button>
                </form>

                <div className="mt-8 text-center text-gray-400 text-xs font-bold uppercase tracking-widest opacity-50">
                    © 2026 Capsule Corp. Todos los derechos reservados.
                </div>
            </div>
        </div>
    );
}
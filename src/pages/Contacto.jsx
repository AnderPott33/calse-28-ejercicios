export function Contacto() {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="bg-gray-800 w-96 h-auto p-2 rounded-lg">
                    <h1 className="text-white text-center text-2xl font-semibold">Página de contacto</h1>
                    <form className="flex flex-col m-2 gap-2" action="/" method="post">
                        <label className="text-white font-bold" htmlFor="correo">Correo</label>
                        <input className="p-2 rounded-lg bg-gray-200 border-2 border-gray-200 focus:outline-none focus:border-blue-700" type="email" name="correo" id="correo" />
                        <hr className="text-white" />
                        <label className="text-white font-bold" htmlFor="mensaje">Escribe su consulta</label>
                        <textarea className="p-2 rounded-lg bg-gray-200 border-2 border-gray-200 focus:outline-none focus:border-blue-700" type="text" name="mensaje" id="mensaje">
                        </textarea>
                        <hr className="text-white" />
                        <button className="bg-blue-500 my-2 hover:bg-blue-700 rounded-lg text-white font-bold p-2">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
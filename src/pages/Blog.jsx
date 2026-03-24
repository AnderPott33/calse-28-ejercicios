import { useState, useEffect } from "react";
export function Blog() {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        fetch('http://localhost/clase-28/ws.php')
            .then((p) => p.json())
            .then(blog => setPublicaciones(blog))
            .catch(err => console.error("Error al cargar el blog:", err));
    }, [])

    return (
        <div className="p-8 bg-gray-900 min-h-screen rounded-lg text-white">
            <h1 className="text-4xl font-extrabold mb-6 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Blog de la App Dragon Ball
            </h1>
            <p className="text-center mb-10 text-lg text-gray-300">
                Bienvenido al blog de nuestra app. Aquí encontrarás noticias, guías y curiosidades sobre las sagas.
            </p>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publicaciones.map((pub, index) => (
                    <article key={pub.id || index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all shadow-lg">
                        <h2 className="text-2xl font-bold mb-2 text-blue-400">{pub.titulo}</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-blue-900 text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                                {pub.saga}
                            </span>
                            <span className="bg-purple-900 text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                                {pub.personaje_principal}
                            </span>
                        </div>
                        <p className="text-gray-400 italic mb-2 text-sm">
                            <span className="font-bold text-gray-300">Tema:</span> {pub.tema_central}
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            {pub.descripcion_corta}
                        </p>
                    </article>
                ))}
            </section>
        </div>
    );
}
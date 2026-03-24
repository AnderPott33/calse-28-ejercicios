import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { DetallePersonaje } from "./pages/DetallePersonaje";
import { Contacto } from "./pages/Contacto";
import { Buscador } from "./pages/Buscador";
import { Personajes } from "./pages/Personajes";
import { Blog } from "./pages/Blog";

export function App() {
    return (
        <>
            <Navbar />

            <div className="p-4">
                    <Routes>
                        <Route path="/" element={<Personajes />} />
                        <Route path="/personaje/:id" element={<DetallePersonaje />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
            </div>
        </>
    );
}
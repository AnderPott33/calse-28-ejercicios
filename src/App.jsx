import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { DetallePersonaje } from "./pages/DetallePersonaje";
import { Contacto } from "./pages/Contacto";
import { Personajes } from "./pages/Personajes";
import { Blog } from "./pages/Blog";

export function App() {
    return (
        <div className="bg-gray-950 min-h-screen font-sans selection:bg-orange-500 selection:text-white">
            <Navbar />

            <main className="animate-in fade-in duration-500">
                    <Routes>
                        <Route path="/" element={<Personajes />} />
                        <Route path="/personaje/:id" element={<DetallePersonaje />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
            </main>
        </div>
    );
}
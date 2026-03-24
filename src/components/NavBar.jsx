import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
    const [open, setOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        isActive
            ? "bg-blue-500 p-1 rounded-lg" // marcado
            : "hover:bg-blue-400 p-1 rounded-lg"; // normal

    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                
                <h1 className="text-xl font-bold">BuscadorApp DragonBall</h1>

                {/* Desktop */}
                <div className="hidden md:flex gap-6">
                    <NavLink to="/" className={linkClass}>Personajes</NavLink>
                    <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
                    <NavLink to="/blog" className={linkClass}>Blog</NavLink>
                </div>

                {/* Mobile button */}
                <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
                    ☰
                </button>
            </div>

            {/* Mobile */}
            {open && (
                <div className="md:hidden flex flex-col px-4 pb-4 gap-2 bg-gray-800">
                    <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Buscador</NavLink>
                    <NavLink to="/personajes" onClick={() => setOpen(false)} className={linkClass}>Personajes</NavLink>
                </div>
            )}
        </nav>
    );
}
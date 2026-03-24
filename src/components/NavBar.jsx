import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
    const [open, setOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        isActive
            ? "bg-blue-800 p-2 rounded-lg border-2 border-yellow-400 font-bold shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-all duration-300" // marcado
            : "hover:bg-blue-700 p-2 rounded-lg font-bold border-2 border-transparent transition-all duration-300"; // normal

    return (
        <nav className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-[0_4px_15px_rgba(0,0,0,0.5)] border-b-4 border-yellow-400">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                
                <div className="flex items-center gap-2">
                    <span className="text-3xl">🐉</span>
                    <h1 className="text-2xl font-black italic uppercase tracking-tighter drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                        Dragon <span className="text-yellow-400">Ball</span> Universe
                    </h1>
                </div>

                {/* Desktop */}
                <div className="hidden md:flex gap-8 items-center uppercase tracking-wider text-sm">
                    <NavLink to="/" className={linkClass}>Personajes</NavLink>
                    <NavLink to="/blog" className={linkClass}>Blog</NavLink>
                    <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
                </div>

                {/* Mobile button */}
                <button 
                    onClick={() => setOpen(!open)} 
                    className="md:hidden text-3xl p-1 bg-blue-800 rounded-lg border-2 border-yellow-400"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile */}
            {open && (
                <div className="md:hidden flex flex-col px-4 pb-4 gap-4 bg-orange-700 animate-in fade-in slide-in-from-top duration-300 border-t-2 border-yellow-400">
                    <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Personajes</NavLink>
                    <NavLink to="/blog" onClick={() => setOpen(false)} className={linkClass}>Blog</NavLink>
                    <NavLink to="/contacto" onClick={() => setOpen(false)} className={linkClass}>Contacto</NavLink>
                </div>
            )}
        </nav>
    );
}
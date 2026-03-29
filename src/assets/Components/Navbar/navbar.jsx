import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigationLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Projects", path: "/projects" },
  { id: 5, name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-black tracking-tighter text-gray-900 uppercase">
            Pricing<span className="text-blue-600">.</span>
          </h1>
        </div>

        {/* Desktop Navigation - Clean & Minimal */}
        <ul className="hidden md:flex items-center space-x-10">
          {navigationLinks.map((link) => (
            <li key={link.id} className="relative group">
              <a 
                href={link.path} 
                className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-300"
              >
                {link.name}
              </a>
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Action Button - Professional Solid Style */}
        <div className="hidden md:block">
          <button className="bg-gray-900 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95">
            Add Items
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-900 transition-transform active:scale-90">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Width Clean Overlay */}
      <div className={`md:hidden absolute w-full bg-white border-b shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
        open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <ul className="flex flex-col p-8 space-y-6">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={link.path} 
                className="text-xl font-bold uppercase tracking-tighter text-gray-900 flex justify-between items-center group"
                onClick={() => setOpen(false)}
              >
                {link.name}
                <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </li>
          ))}
          <li className="pt-4">
            <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest">
              Add Items
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
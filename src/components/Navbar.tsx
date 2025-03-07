
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/90 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-law-DEFAULT">JurisConsult</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="nav-link text-law-DEFAULT hover:text-law-accent font-medium">Início</a>
            <a href="#servicos" className="nav-link text-law-DEFAULT hover:text-law-accent font-medium">Serviços</a>
            <a href="#sobre" className="nav-link text-law-DEFAULT hover:text-law-accent font-medium">Sobre Nós</a>
            <a href="#contato" className="nav-link text-law-DEFAULT hover:text-law-accent font-medium">Contato</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-law-DEFAULT"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <a 
                href="#inicio" 
                className="text-law-DEFAULT hover:text-law-accent font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#servicos" 
                className="text-law-DEFAULT hover:text-law-accent font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#sobre" 
                className="text-law-DEFAULT hover:text-law-accent font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a 
                href="#contato" 
                className="text-law-DEFAULT hover:text-law-accent font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

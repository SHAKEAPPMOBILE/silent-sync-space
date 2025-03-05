
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass-morphism' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 bg-nature-500 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-silence-500 rounded-full mix-blend-multiply opacity-80"></div>
            </div>
            <span className="text-xl font-medium">Silent Sync</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base transition-all duration-300 ${isActive 
                  ? 'text-silence-700 font-medium' 
                  : 'text-foreground/80 hover:text-foreground'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/events" 
              className={({ isActive }) => 
                `text-base transition-all duration-300 ${isActive 
                  ? 'text-silence-700 font-medium' 
                  : 'text-foreground/80 hover:text-foreground'}`
              }
            >
              Find Events
            </NavLink>
            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                `text-base transition-all duration-300 ${isActive 
                  ? 'text-silence-700 font-medium' 
                  : 'text-foreground/80 hover:text-foreground'}`
              }
            >
              Profile
            </NavLink>
            <Button className="bg-nature-500 hover:bg-nature-600 transition-all duration-300">
              Create Event
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base transition-all duration-300 ${isActive 
                  ? 'text-silence-700 font-medium' 
                  : 'text-foreground/80 hover:text-foreground'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/events" 
              className={({ isActive }) => 
                `text-base transition-all duration-300 ${isActive 
                  ? 'text-silence-700 font-medium' 
                  : 'text-foreground/80 hover:text-foreground'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find Events
            </NavLink>
            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                `text-base transition-all duration-300 ${isActive 
                  ? 'text-silence-700 font-medium' 
                  : 'text-foreground/80 hover:text-foreground'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Profile
            </NavLink>
            <Button 
              className="bg-nature-500 hover:bg-nature-600 transition-all duration-300 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Create Event
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

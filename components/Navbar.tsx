
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? 'py-4 glass shadow-2xl shadow-slate-100/50' : 'py-10 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center space-x-3 group cursor-pointer" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              closeMenu();
            }}
          >
            <div className="w-12 h-12 bg-slate-900 rounded-[18px] flex items-center justify-center text-white font-black text-2xl transition-transform group-hover:rotate-12 group-hover:bg-blue-600 shadow-xl shadow-slate-200">D</div>
            <span className="text-3xl font-black tracking-tighter text-slate-900">
              Dory<span className="text-blue-600">Tech</span>
            </span>
          </div>
          
          <div className="hidden lg:flex space-x-12 items-center">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-all relative group"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-1 bg-blue-600 transition-all group-hover:w-full rounded-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-10 py-4 bg-slate-900 text-white text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-200 transition-all active:scale-95"
            >
              Hire Dory
            </a>
          </div>

          <button 
            onClick={toggleMenu}
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-white border border-slate-100 rounded-2xl shadow-sm text-slate-900 z-50"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-500 transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={closeMenu}
              className="text-2xl font-black uppercase tracking-[0.3em] text-slate-900 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="px-12 py-6 bg-slate-900 text-white text-sm font-black uppercase tracking-[0.2em] rounded-full hover:bg-blue-600 shadow-2xl shadow-blue-200 transition-all active:scale-95"
          >
            Hire Dory
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

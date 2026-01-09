import React, { useState } from 'react';

interface SidebarProps {
  currentRoute: string;
  navigate: (route: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentRoute, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Journal', route: '/' },
    { label: 'Projects', route: 'projects' },
    { label: 'About', route: 'about' },
  ];

  return (
    <>
      {/* Mobile Menu Button - Updated to match theme */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 px-3 py-1 bg-[#1A2F25]/90 backdrop-blur-sm text-stone-100 rounded-sm border border-[#2C4A3B] uppercase text-[10px] tracking-[0.2em] font-medium shadow-sm hover:bg-[#1A2F25] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar Container - Deep Forest Green */}
      <div className={`
        fixed top-0 left-0 bottom-0 z-40
        w-72 bg-[#1A2F25] border-r border-[#23382F]
        transform transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        overflow-y-auto no-scrollbar
        flex flex-col items-start text-left
      `}>
        <div className="p-10 w-full flex flex-col h-full">
          
          <div 
            className="mb-16 cursor-pointer group"
            onClick={() => { navigate('/'); setIsOpen(false); }}
          >
            <h1 className="text-5xl font-medium text-[#E8E6E3] font-serif tracking-tight leading-[0.85] group-hover:text-white transition-colors duration-500 ease-out">
              <span className="block">Alan</span>
              <span className="block italic ml-4 text-[#C5A572]">Glennon</span>
            </h1>
            <div className="w-8 h-px bg-[#4A6356] mt-8 mb-6"></div>
            <p className="text-[10px] text-[#8C9E94] uppercase tracking-[0.2em] font-sans font-medium leading-relaxed">
              Geographer &<br/>Venture Investor
            </p>
          </div>

          <nav className="flex flex-col space-y-6 w-full pl-2">
            {navItems.map((item) => (
              <a
                key={item.route}
                href={`#${item.route === '/' ? '' : item.route}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.route);
                  setIsOpen(false);
                }}
                className={`
                  block text-lg font-serif italic tracking-wide transition-all duration-500 ease-out relative group
                  ${currentRoute === item.route 
                    ? 'text-white translate-x-2' 
                    : 'text-[#8C9E94] hover:text-[#D1DED7] hover:translate-x-1'}
                `}
              >
                {/* Subtle indicator dot - Gold/Bronze accent */}
                <span className={`
                  absolute -left-5 top-[0.6em] w-1.5 h-1.5 rounded-full bg-[#C5A572] 
                  transition-all duration-500 ease-out
                  ${currentRoute === item.route ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                `}></span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-10">
            <div className="text-[9px] text-[#5C7066] uppercase tracking-[0.2em] font-medium mb-4">
               Social
            </div>
            <div className="flex space-x-5 text-[#8C9E94]">
               <a href="https://github.com/glennon" className="hover:text-white transition-colors duration-300"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg></a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#1A2F25] bg-opacity-60 z-30 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
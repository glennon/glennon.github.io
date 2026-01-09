import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  currentRoute: string;
  navigate: (route: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentRoute, navigate }) => {
  return (
    <div className="flex min-h-screen paper-texture">
      <Sidebar currentRoute={currentRoute} navigate={navigate} />
      
      <main className="flex-1 md:ml-72 w-full">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 lg:px-16">
          {/* Key forces re-render of div and triggers animation when route changes */}
          <div key={currentRoute} className="animate-fade-in-up">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  onRegister: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onNavigate, onRegister }) => {
  return (
    <div className="bg-white min-h-screen font-sans flex flex-col">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center w-full">
        <button 
          onClick={() => onNavigate('home')} 
          className="text-2xl font-bold text-indigo-600 hover:opacity-80 transition-opacity"
        >
          GlitchHunt
        </button>
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <button onClick={() => onNavigate('product')} className="hover:text-indigo-600 transition-colors">Product</button>
          <button onClick={() => onNavigate('solutions')} className="hover:text-indigo-600 transition-colors">Solutions</button>
        </div>
        <button 
          onClick={onRegister}
          className="text-indigo-600 font-semibold hover:bg-indigo-50 px-4 py-2 rounded-lg transition-colors border border-transparent hover:border-indigo-100"
        >
          Register
        </button>
      </nav>

      {/* Main Page Content */}
      <div className="flex-1">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-slate-200 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-indigo-600">GlitchHunt</span>
            <span className="text-sm text-slate-500">© 2024 GlitchHunt Inc.</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-600 font-medium">
             <button onClick={() => onNavigate('privacy')} className="hover:text-indigo-600 transition-colors">Privacy Policy</button>
             <button onClick={() => onNavigate('terms')} className="hover:text-indigo-600 transition-colors">Terms of Service</button>
             <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
             <a href="#" className="hover:text-indigo-600 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
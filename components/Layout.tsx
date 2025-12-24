import React from 'react';
import { trackNavigation, trackButtonClick } from '../services/analyticsService';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  onRegister: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onNavigate, onRegister }) => {
  return (
    <div className="bg-black min-h-screen font-sans flex flex-col">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-between items-center w-full border-b border-white/10">
        <button 
          onClick={() => {
            trackNavigation('Home');
            onNavigate('home');
          }} 
          className="text-xl sm:text-2xl font-bold text-white hover:opacity-80 transition-opacity"
        >
          GlitchHunt
        </button>
        <div className="hidden md:flex gap-6 lg:gap-8 text-gray-400 font-medium text-sm">
          <button onClick={() => {
            trackNavigation('Product');
            onNavigate('product');
          }} className="hover:text-white transition-colors">Product</button>
          <button onClick={() => {
            trackNavigation('Solutions');
            onNavigate('solutions');
          }} className="hover:text-white transition-colors">Solutions</button>
        </div>
        <button 
          onClick={() => {
            trackButtonClick('Register', 'Navbar');
            onRegister();
          }}
          className="text-sm sm:text-base bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 px-4 sm:px-6 py-2 rounded-lg transition-all shadow-lg shadow-indigo-500/20"
        >
          Get Early Access
        </button>
      </nav>

      {/* Main Page Content */}
      <div className="flex-1">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 sm:px-6 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-bold text-white">GlitchHunt</span>
            <span className="text-xs sm:text-sm text-gray-500">© 2025 GlitchHunt Inc.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400 font-medium">
             <button onClick={() => {
               trackNavigation('Privacy Policy');
               onNavigate('privacy');
             }} className="hover:text-white transition-colors">Privacy Policy</button>
             <button onClick={() => {
               trackNavigation('Terms of Service');
               onNavigate('terms');
             }} className="hover:text-white transition-colors">Terms of Service</button>
             <a href="#" onClick={() => trackButtonClick('Twitter', 'Footer')} className="hover:text-white transition-colors">Twitter</a>
             <a href="#" onClick={() => trackButtonClick('GitHub', 'Footer')} className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
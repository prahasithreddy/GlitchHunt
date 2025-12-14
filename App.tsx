import React, { useState } from 'react';
import { VariantRenderer } from './components/VariantRenderer';
import { AICopyGenerator } from './components/AICopyGenerator';
import { CopySuggestion } from './services/geminiService';
import { Layout as MainLayout } from './components/Layout';
import { ProductPage, SolutionsPage, PrivacyPolicyPage, TermsPage } from './components/ContentPages';
import { RegistrationModal } from './components/RegistrationModal';
import { Layout, Palette, X } from 'lucide-react';

const DEFAULT_COPY: CopySuggestion = {
  headline: "Where Bugs Go To Die.",
  subheadline: "The front page of the broken internet. Join thousands of users reporting and fixing glitches in your favorite apps.",
  cta: "Start Hunting"
};

const App: React.FC = () => {
  const [currentCopy, setCurrentCopy] = useState<CopySuggestion>(DEFAULT_COPY);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderContent = () => {
    switch(currentPage) {
      case 'product': return <ProductPage />;
      case 'solutions': return <SolutionsPage />;
      case 'privacy': return <PrivacyPolicyPage />;
      case 'terms': return <TermsPage />;
      case 'home':
      default:
        return (
          <VariantRenderer 
            copy={currentCopy} 
            email={email}
            setEmail={setEmail}
            onStartHunting={() => setIsModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen">
      
      {/* Global Registration Modal */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        prefilledEmail={email}
      />
      
      {/* Sidebar Control */}
      {!isSidebarOpen && (
         <button 
           onClick={() => setIsSidebarOpen(true)}
           className="fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition-all"
         >
           <Layout className="w-5 h-5" />
         </button>
      )}

      {/* Editor Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full bg-slate-900 text-white w-80 shadow-2xl transform transition-transform duration-300 z-50 overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
             <h2 className="text-lg font-bold flex items-center gap-2"><Palette className="w-5 h-5 text-blue-400" /> Page Settings</h2>
             <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
          </div>
          
          <AICopyGenerator 
            currentStyle="clean-saas" 
            onUpdate={(newCopy) => setCurrentCopy(newCopy)}
          />

          <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-gray-500">
             <p>GlitchHunt Landing Page</p>
             <p>Clean SaaS Version 1.0</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main 
        className={`transition-all duration-300 ${isSidebarOpen ? 'ml-80' : 'ml-0'}`}
      >
         <MainLayout 
            onNavigate={setCurrentPage}
            onRegister={() => setIsModalOpen(true)}
         >
            {renderContent()}
         </MainLayout>
      </main>

    </div>
  );
};

export default App;
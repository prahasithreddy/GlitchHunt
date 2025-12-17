import React, { useState, useEffect } from 'react';
import { VariantRenderer } from './components/VariantRenderer';
import { Layout as MainLayout } from './components/Layout';
import { ProductPage, SolutionsPage, PrivacyPolicyPage, TermsPage } from './components/ContentPages';
import { RegistrationModal } from './components/RegistrationModal';
import { initGA, trackPageView, trackModalOpen, trackModalClose } from './services/analyticsService';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize Google Analytics on app load
  useEffect(() => {
    initGA();
    trackPageView('/');
  }, []);

  // Track page views when navigation changes
  useEffect(() => {
    trackPageView(`/${currentPage === 'home' ? '' : currentPage}`);
  }, [currentPage]);

  // Track modal state changes
  useEffect(() => {
    if (isModalOpen) {
      trackModalOpen('Registration Modal');
    }
  }, [isModalOpen]);

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
        onClose={() => {
          setIsModalOpen(false);
          trackModalClose('Registration Modal');
        }}
        prefilledEmail={email}
      />

      {/* Main Content Area */}
      <main>
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
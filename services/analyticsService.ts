import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (measurementId && measurementId !== 'your_ga_measurement_id_here') {
    ReactGA.initialize(measurementId, {
      gaOptions: {
        debug_mode: import.meta.env.DEV, // Enable debug mode in development
      },
    });
    console.log('Google Analytics initialized with ID:', measurementId);
  } else {
    console.warn('Google Analytics not initialized. Please add VITE_GA_MEASUREMENT_ID to your .env.local file.');
  }
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path,
    title: title || document.title
  });
};

// Track custom events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('Button', 'Click', `${buttonName}${location ? ` - ${location}` : ''}` );
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('Form', success ? 'Submit Success' : 'Submit Error', formName);
};

// Track modal opens
export const trackModalOpen = (modalName: string) => {
  trackEvent('Modal', 'Open', modalName);
};

// Track modal closes
export const trackModalClose = (modalName: string) => {
  trackEvent('Modal', 'Close', modalName);
};

// Track registration attempts
export const trackRegistration = (success: boolean, referralSource?: string) => {
  trackEvent('Registration', success ? 'Success' : 'Failed', referralSource);
};

// Track navigation
export const trackNavigation = (destination: string) => {
  trackEvent('Navigation', 'Click', destination);
};

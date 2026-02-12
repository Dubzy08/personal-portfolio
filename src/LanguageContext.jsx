import React, { createContext, useState, useContext } from 'react';
import { translations } from './tranlations';

// 1. Create the context
const LanguageContext = createContext();

// 2. Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Create a custom hook for easy access
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  
  // If the hook is used outside the provider, throw an error
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  const { language, toggleLanguage } = context;

  // Return the specific translation object ('t') directly!
  return { 
    t: translations[language], 
    language, 
    toggleLanguage 
  };
};
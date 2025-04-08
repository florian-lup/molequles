'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import WaitlistForm from '@/components/forms/WaitlistForm';

interface WaitlistContextType {
  isWaitlistOpen: boolean;
  openWaitlist: () => void;
  closeWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export const useWaitlist = () => {
  const context = useContext(WaitlistContext);
  if (context === undefined) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
};

interface WaitlistProviderProps {
  children: ReactNode;
}

export const WaitlistProvider = ({ children }: WaitlistProviderProps) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <WaitlistContext.Provider
      value={{
        isWaitlistOpen,
        openWaitlist,
        closeWaitlist,
      }}
    >
      {children}
      <WaitlistForm isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </WaitlistContext.Provider>
  );
};

export default WaitlistContext; 
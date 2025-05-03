'use client';

import React, { createContext, useState, ReactNode } from 'react';
import WaitlistForm from '@/components/forms/WaitlistForm';

/**
 * Context for managing waitlist modal state
 */
interface WaitlistContextType {
  isWaitlistOpen: boolean;
  openWaitlist: () => void;
  closeWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

interface WaitlistProviderProps {
  children: ReactNode;
}

/**
 * Provider component that makes waitlist state available to app
 */
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

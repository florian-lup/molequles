import { useContext } from 'react';
import WaitlistContext from '@/contexts/WaitlistContext';

/**
 * Hook to access waitlist context functions
 * @returns Waitlist context with open/close methods
 * @throws Error if used outside WaitlistProvider
 */
export const useWaitlist = () => {
  const context = useContext(WaitlistContext);
  if (context === undefined) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
}; 
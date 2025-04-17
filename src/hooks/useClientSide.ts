import { useState, useEffect } from 'react';

/**
 * Detects if code is running on client side
 * @returns Boolean indicating client-side rendering
 */
export const useClientSide = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient;
}; 
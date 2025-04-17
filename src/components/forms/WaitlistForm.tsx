'use client';

import { useState, useEffect, useRef, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMail } from 'react-icons/fi';
import { GiMolecule } from 'react-icons/gi';
import Button from '@/components/ui/Button';

// Props interface for WaitlistForm component
export interface WaitlistFormProps {
  isOpen: boolean;  // Controls visibility of the modal
  onClose: () => void;  // Callback function to close the modal
} 

const WaitlistForm: FC<WaitlistFormProps> = ({ isOpen, onClose }) => {
  // Form state management
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Element references for modal and input focus
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Modal clickout detection and body scroll management
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
      
      // Focus input on open for immediate typing
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto'; // Restore scrolling
    };
  }, [isOpen, onClose]);
  
  // Keyboard escape key handler
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);
  
  // Email validation regex function
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };
  
  // Real-time email validation
  useEffect(() => {
    setIsValid(validateEmail(email));
  }, [email]);
  
  // Form submission handler with success sequence
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValid) return;
    
    setIsSubmitting(true);
    
    // Simulated API call with delayed success response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Auto-close the modal after showing success message
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }, 1500);
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Semi-transparent backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm"
          />
          
          {/* Modal container with animation */}
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 500 }}
            className="bg-gray-900/90 backdrop-blur-md rounded-xl border border-gray-800/70 p-5 sm:p-6 lg:p-8 shadow-xl w-full max-w-md relative z-10"
          >
            {/* Modal close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white p-1 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                Join Our
              </span>{' '}
              <span className="text-gray-100">Waitlist</span>
            </h2>
            
            <p className="text-sm sm:text-base text-gray-300 mb-5 leading-relaxed font-light border-l-2 border-cyan-500 pl-3">
              Be among the first to experience our personalized perfume technology.
            </p>
            
            {/* Background gradient decorations */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-xl -z-10"></div>
            <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/10 blur-xl -z-10"></div>
            
            {/* Email submission form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isSubmitted ? (
                <>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-cyan-400">
                      <FiMail size={18} />
                    </div>
                    <input
                      ref={inputRef}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-800/50 border border-gray-700/50 text-white text-sm rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 placeholder-gray-400 text-[16px]"
                      placeholder="your-email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <Button 
                      onClick={() => {}}
                      type="submit"
                      disabled={!isValid}
                      loading={isSubmitting}
                      rightIcon
                    >
                      Join Waitlist
                    </Button>
                    <span className="text-xs text-cyan-600 mt-2 text-center">Free Samples Available</span>
                  </div>
                </>
              ) : (
                // Success confirmation view
                <div className="text-center py-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/20 flex items-center justify-center">
                      <GiMolecule className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-gray-300 text-sm border-l-2 border-cyan-500 pl-3 inline-block">
                    Thank you for joining our waitlist. We'll be in touch soon!
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistForm; 
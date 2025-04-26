'use client';

import { useState, useEffect, useRef, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMail } from 'react-icons/fi';
import { GiMolecule } from 'react-icons/gi';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

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
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          />
          
          {/* Modal container with animation */}
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 500 }}
            className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 lg:p-8 shadow-lg w-full max-w-md relative z-10"
          >
            {/* Modal close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>
            
            <div className="flex justify-left mb-4">
              <Badge 
                text="No Credit Card Required" 
                textSize="xs"
                textColor="text-gray-600"
              />
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 mb-5 leading-relaxed font-light border-l-2 border-gray-300 pl-3">
              Be among the first to experience our AI personalized perfume technology.
            </p>
            
            {/* Email submission form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isSubmitted ? (
                <>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                      <FiMail size={18} />
                    </div>
                    <input
                      ref={inputRef}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-gray-200 focus:border-gray-300 placeholder-gray-400 text-[16px]"
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
                  </div>
                </>
              ) : (
                // Success confirmation view
                <div className="text-center py-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                      <GiMolecule className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-gray-600 text-sm border-l-2 border-gray-300 pl-3 inline-block">
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
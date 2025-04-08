'use client';

import { useState, useEffect, useRef, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowRight, FiMail } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistForm: FC<WaitlistFormProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      
      // Focus the input when modal opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto'; // Restore scrolling when modal closes
    };
  }, [isOpen, onClose]);
  
  // Handle Escape key press
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
  
  // Validate email
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };
  
  // Update validation on email change
  useEffect(() => {
    setIsValid(validateEmail(email));
  }, [email]);
  
  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValid) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission (will be replaced with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 500 }}
            className="bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-800/70 p-4 xs:p-5 sm:p-6 md:p-7 shadow-xl w-full max-w-md relative z-10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white p-1 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>
            
            <div className="mb-4 sm:mb-5 flex justify-center">
              <Badge>Join Our Waitlist</Badge>
            </div>
            
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 xs:mb-3 leading-tight text-white text-center">
              Be First to Experience{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400">
                Molequles
              </span>
            </h2>
            
            <p className="text-sm xs:text-base text-gray-300 mb-5 xs:mb-6 sm:mb-7 text-center">
              Join our exclusive waitlist to be among the first to experience our personalized perfume technology.
            </p>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/10 blur-xl -z-10"></div>
            <div className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/10 blur-xl -z-10"></div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isSubmitted ? (
                <>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <FiMail size={18} />
                    </div>
                    <input
                      ref={inputRef}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-800/50 border border-gray-700/50 text-white text-sm rounded-lg block w-full pl-10 p-2.5 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 placeholder-gray-400"
                      placeholder="your-email@example.com"
                      required
                    />
                  </div>
                  <Button
                    variant="neon"
                    size="lg"
                    shape="pill"
                    icon={<FiArrowRight />}
                    iconPosition="right"
                    fullWidth
                    disabled={!isValid}
                    loading={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </Button>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Thank you for joining our waitlist. We'll be in touch soon!
                  </p>
                </div>
              )}
              
              <p className="text-xs text-gray-400 mt-4 text-center">
                By joining, you agree to receive updates about our products.
                We'll never spam or share your email.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistForm; 
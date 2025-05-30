'use client';

import { useEffect, useRef, FC } from 'react';
import { FiX, FiMail } from 'react-icons/fi';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';
import Input from '@/components/ui/input';

// Props interface for WaitlistModal component
export interface WaitlistModalProps {
  isOpen: boolean; // Controls visibility of the modal
  onClose: () => void; // Callback function to close the modal
}

const WaitlistModal: FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Semi-transparent backdrop with blur */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Modal container */}
      <div
        ref={modalRef}
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
            variant="success"
          />
        </div>

        <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed font-light border-l-2 border-gray-300 pl-3">
          Be among the first to experience our AI personalized perfume technology.
        </p>

        {/* Email submission form */}
        <form className="space-y-4">
          <Input
            ref={inputRef}
            type="email"
            variant="filled"
            inputSize="md"
            leftIcon={<FiMail size={18} />}
            placeholder="your-email@example.com"
            className="text-[16px]"
            required
          />

          <div className="flex flex-col">
            <Button
              type="submit"
              rightIcon
            >
              Join Waitlist
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaitlistModal;

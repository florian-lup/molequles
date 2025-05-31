import { useState, useCallback } from 'react';

interface UseFormSubmissionOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

interface UseFormSubmissionReturn {
  isSubmitting: boolean;
  error: Error | null;
  submitForm: (submitFn: () => Promise<void>) => Promise<void>;
  clearError: () => void;
}

export function useFormSubmission<T = unknown>(
  options: UseFormSubmissionOptions<T> = {}
): UseFormSubmissionReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const submitForm = useCallback(
    async (submitFn: () => Promise<void>) => {
      setIsSubmitting(true);
      setError(null);

      try {
        await submitFn();
        options.onSuccess?.(undefined as T);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('An error occurred');
        setError(error);
        options.onError?.(error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [options]
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isSubmitting,
    error,
    submitForm,
    clearError,
  };
}

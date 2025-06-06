'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Card from '@/components/ui/card';
import Section from '@/components/layout/section';

interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

const FaqAccordion = memo(() => {
  const faqData: readonly FaqItem[] = useMemo(
    () => [
      {
        question: 'How does skin chemistry analysis work?',
        answer:
          'We partner with dermatologists to analyze key skin parameters including pH levels, sebum production, temperature, and hydration. This data is then processed by our AI to predict how different fragrance ingredients will interact with your unique skin chemistry.',
      },
      {
        question: 'How long does it take to receive my personalized fragrance?',
        answer:
          'After your skin analysis is complete, it typically takes 2-3 weeks to create and ship your custom fragrance. We craft each bottle individually using our AI-recommended formula for your specific skin profile.',
      },
      {
        question: "What if I don't like my personalized fragrance?",
        answer:
          "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your personalized fragrance, we'll work with you to reformulate it or provide a full refund.",
      },
      {
        question: 'Can I order without a skin analysis?',
        answer:
          'Yes! Our Ingredients Plan allows you to experience a unique fragrance from our 4,000+ ingredient library without requiring skin analysis. However, for the most personalized experience, we recommend the Skin Chemistry Plan.',
      },
      {
        question: 'Are your fragrances safe for sensitive skin?',
        answer:
          'Our AI analysis specifically identifies ingredients that may cause reactions based on your skin profile. We avoid known allergens and irritants for your specific skin type, significantly reducing the risk of adverse reactions.',
      },
      {
        question: 'How long do the fragrances last?',
        answer:
          'Because our fragrances are formulated specifically for your skin chemistry, they typically last 6-8 hours with optimal projection and longevity. The personalized formula ensures better adherence and evolution on your skin.',
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="space-y-3 sm:space-y-4" role="region" aria-label="Frequently Asked Questions">
      {faqData.map((faq, index) => (
        <Card key={faq.question} className="overflow-hidden">
          <button
            type="button"
            className="w-full text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg p-2 sm:p-0 touch-manipulation"
            onClick={() => toggleFaq(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-black pr-3 sm:pr-4 leading-relaxed">
              {faq.question}
            </h3>
            <div className="flex-shrink-0 p-1" aria-hidden="true">
              {openIndex === index ? (
                <FiChevronUp className="h-5 w-5 text-emerald-600" />
              ) : (
                <FiChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </button>

          {openIndex === index && (
            <div
              className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100"
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2 sm:px-0">
                {faq.answer}
              </p>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
});

FaqAccordion.displayName = 'FaqAccordion';

const Faq = memo(() => {
  return (
    <Section
      id="faq"
      ariaLabel="Frequently asked questions section"
      maxWidth="3xl"
      padding="md"
      showFrame={false}
    >
      {/* Section heading - improved mobile typography */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <div className="relative inline-block">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-black to-emerald-600 bg-clip-text text-transparent text-left">
            Frequently Asked Questions
          </h2>
          {/* Decorative underline - responsive sizing */}
          <div className="absolute -bottom-1 left-0 w-12 sm:w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
        </div>
      </div>

      <FaqAccordion />
    </Section>
  );
});

Faq.displayName = 'Faq';

export default Faq;

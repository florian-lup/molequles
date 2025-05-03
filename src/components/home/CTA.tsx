'use client';

import { useWaitlist } from '@/hooks';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Image from 'next/image';

/**
 * Skin parameter data type
 */
interface SkinParameterProps {
  value: string;
  unit: string;
  label: string;
  color: string;
}

/**
 * Component to display a single skin parameter card
 */
const SkinParameterCard = ({ value, unit, label, color }: SkinParameterProps) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-sm bg-amber-50/30 p-3 border border-gray-200 text-center w-[80px] md:w-[100px] h-[70px] flex items-center justify-center bg-[linear-gradient(#33333310_1px,transparent_1px),linear-gradient(90deg,#33333310_1px,transparent_1px)] bg-[size:16px_16px]">
      <div>
        <div className="flex items-baseline justify-center mb-1">
          <span className={`text-${color} text-sm font-semibold`}>{value}</span>
          <span className={`text-gray-600 text-xs ml-0.5`}>{unit}</span>
        </div>
        <div className="text-gray-600 text-xs">{label}</div>
      </div>
    </div>
  );
};

/**
 * Panel containing call-to-action message and waitlist button
 */
const CTAMessagePanel = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <div className="w-full text-center">
      {/* Centered headline */}
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-black">
        Sign up for early access
      </h2>

      {/* Waitlist button with promotional text */}
      <div className="flex items-center justify-center gap-4">
        <Button onClick={openWaitlist} size="sm" rightIcon>
          Join Waitlist
        </Button>
        <Badge
          text="Free Samples Available"
          textSize="xs"
          dotColor="bg-green-500"
          bgColor="bg-green-50"
          textColor="text-green-700"
        />
      </div>
    </div>
  );
};

/**
 * Main CTA section combining messaging and sample bottle image
 */
export default function CTA() {
  useWaitlist();

  // Skin parameter data
  const parameters = [
    {
      value: '74',
      unit: 'μg',
      label: 'Sebum',
      color: 'cyan-500',
    },
    {
      value: '33',
      unit: '°C',
      label: 'Temp',
      color: 'blue-500',
    },
    {
      value: '~5.5',
      unit: '',
      label: 'pH Level',
      color: 'indigo-500',
    },
    {
      value: '61',
      unit: 'AU',
      label: 'Hydration',
      color: 'purple-500',
    },
  ];

  return (
    <section
      id="cta"
      aria-label="Call to action section"
      className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-3/4 w-full absolute left-0 right-0 top-1/2 -translate-y-1/2"
          style={{
            backgroundImage:
              'linear-gradient(to right, #f7f7f7 1px, transparent 1px), linear-gradient(to bottom, #f7f7f7 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            backgroundPosition: 'center center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, transparent 10%, rgba(255,255,255,0.8) 80%, white 100%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-3xl z-10 relative">
        {/* Stacked vertical layout */}
        <div className="flex flex-col items-center justify-center gap-10 py-2 md:py-4">
          <CTAMessagePanel />
          <div className="w-full flex justify-center relative">
            {/* Center image with overlaid parameters */}
            <div className="relative w-[250px] h-[350px] md:w-[300px] md:h-[400px]">
              <Image
                src="/images/sample_bottle.png"
                alt="Sample Bottle"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 250px, 300px"
              />

              {/* Left side parameters inside image div */}
              <div className="absolute left-[-60px] md:left-[-80px] top-[80px] md:top-[100px]">
                <SkinParameterCard
                  value={parameters[0].value}
                  unit={parameters[0].unit}
                  label={parameters[0].label}
                  color={parameters[0].color}
                />
              </div>
              <div className="absolute left-[-60px] md:left-[-80px] bottom-[80px] md:bottom-[100px]">
                <SkinParameterCard
                  value={parameters[1].value}
                  unit={parameters[1].unit}
                  label={parameters[1].label}
                  color={parameters[1].color}
                />
              </div>

              {/* Right side parameters inside image div */}
              <div className="absolute right-[-60px] md:right-[-80px] top-[80px] md:top-[100px]">
                <SkinParameterCard
                  value={parameters[2].value}
                  unit={parameters[2].unit}
                  label={parameters[2].label}
                  color={parameters[2].color}
                />
              </div>
              <div className="absolute right-[-60px] md:right-[-80px] bottom-[80px] md:bottom-[100px]">
                <SkinParameterCard
                  value={parameters[3].value}
                  unit={parameters[3].unit}
                  label={parameters[3].label}
                  color={parameters[3].color}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

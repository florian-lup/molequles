'use client';

// UI component for decorative elements used in the Hero section
export const HeroDecorations = () => (
  <>
    {/* Large blurred circles */}
    <div className="absolute top-[15%] right-[8%] w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/10 blur-2xl"></div>
    <div className="absolute bottom-[40%] left-[5%] w-28 sm:w-36 md:w-48 h-28 sm:h-36 md:h-48 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
    <div className="absolute top-[60%] left-[45%] w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl"></div>
    
    {/* Animated dots */}
    <div className="absolute top-1/3 left-1/4 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 rounded-full bg-pink-400/50 animate-pulse"></div>
    <div className="absolute top-2/3 right-1/4 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-indigo-400/50 animate-pulse"></div>
    <div className="absolute top-1/2 left-1/2 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full bg-cyan-400/50 animate-pulse"></div>
    <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-purple-400/50 animate-pulse-slow"></div>
    <div className="absolute bottom-1/3 left-1/3 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-indigo-300/50 animate-pulse-slow"></div>
    <div className="absolute top-2/5 left-[5%] sm:left-16 w-2 h-2 rounded-full bg-pink-300/50 animate-pulse"></div>
    <div className="absolute bottom-1/4 right-[5%] sm:right-16 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-cyan-300/50 animate-pulse-slow"></div>
    <div className="absolute top-3/4 left-[5%] sm:left-10 w-2 h-2 rounded-full bg-indigo-400/50 animate-pulse"></div>
  </>
);

// UI component for decorative elements used in the Problem section
export const ProblemDecorations = () => (
  <>
    {/* Large blurred circles */}
    <div className="absolute top-[10%] left-[35%] w-12 xs:w-16 sm:w-20 md:w-28 lg:w-32 h-12 xs:h-16 sm:h-20 md:h-28 lg:h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/10 blur-2xl"></div>
    <div className="absolute top-[30%] right-[15%] w-14 xs:w-18 sm:w-22 md:w-30 lg:w-36 h-14 xs:h-18 sm:h-22 md:h-30 lg:h-36 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
    <div className="absolute bottom-[30%] left-[15%] w-14 xs:w-18 sm:w-22 md:w-30 lg:w-36 h-14 xs:h-18 sm:h-22 md:h-30 lg:h-36 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/10 blur-2xl"></div>
    
    {/* Animated dots */}
    <div className="absolute top-1/4 right-1/4 w-2 xs:w-3 sm:w-4 h-2 xs:h-3 sm:h-4 rounded-full bg-indigo-400/50 animate-pulse"></div>
    <div className="absolute bottom-1/4 left-1/3 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
    <div className="absolute top-1/3 left-1/4 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-cyan-400/50 animate-pulse-slow"></div>
    <div className="absolute bottom-1/4 right-1/3 w-2 xs:w-3 sm:w-4 h-2 xs:h-3 sm:h-4 rounded-full bg-indigo-300/50 animate-pulse"></div>
  </>
);

// UI component for decorative elements used in the Solution section
export const SolutionDecorations = () => (
  <>
    {/* Large blurred circles */}
    <div className="absolute top-[20%] right-[8%] w-20 xs:w-24 sm:w-28 md:w-32 h-20 xs:h-24 sm:h-28 md:h-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
    <div className="absolute bottom-[10%] left-[10%] w-24 xs:w-28 sm:w-32 md:w-36 h-24 xs:h-28 sm:h-32 md:h-36 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/10 blur-2xl"></div>
    <div className="hidden lg:block h-16 sm:h-20 md:h-24 lg:h-28 w-16 sm:w-20 md:w-24 lg:w-28 absolute right-[5%] bottom-[10%] rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-xl animate-pulse-slow"></div>
    
    {/* Animated dots */}
    <div className="absolute top-1/3 right-1/4 w-2 xs:w-3 sm:w-4 h-2 xs:h-3 sm:h-4 rounded-full bg-pink-400/50 animate-pulse"></div>
    <div className="absolute top-1/2 left-1/2 w-2 xs:w-3 sm:w-4 md:w-5 h-2 xs:h-3 sm:h-4 md:h-5 rounded-full bg-indigo-400/50 animate-pulse"></div>
    <div className="absolute top-1/4 left-1/3 w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-purple-400/50 animate-pulse-slow"></div>
    <div className="absolute top-2/3 left-1/4 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-300/50 animate-pulse-slow"></div>
    <div className="absolute bottom-1/4 left-2/3 w-2 xs:w-3 sm:w-4 h-2 xs:h-3 sm:h-4 rounded-full bg-indigo-300/50 animate-pulse"></div>
  </>
);

// UI component for decorative elements used in the Benefits section
export const BenefitsDecorations = () => (
  <>
    {/* Large blurred circles */}
    <div className="absolute top-[15%] right-[10%] w-16 xs:w-20 sm:w-24 md:w-32 lg:w-40 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
    <div className="absolute bottom-[20%] left-[8%] w-16 xs:w-20 sm:w-28 md:w-36 lg:w-44 h-16 xs:h-20 sm:h-28 md:h-36 lg:h-44 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/10 blur-2xl"></div>
    <div className="absolute top-[60%] left-[40%] w-12 xs:w-16 sm:w-20 md:w-28 h-12 xs:h-16 sm:h-20 md:h-28 rounded-full bg-gradient-to-r from-indigo-500/15 to-purple-500/10 blur-xl"></div>
    
    {/* Animated dots */}
    <div className="absolute top-1/4 right-1/3 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
    <div className="absolute bottom-1/4 left-1/4 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-indigo-400/50 animate-pulse"></div>
    <div className="absolute top-1/2 right-1/4 w-2 xs:w-3 sm:w-4 md:w-5 h-2 xs:h-3 sm:h-4 md:h-5 rounded-full bg-cyan-400/50 animate-pulse-slow"></div>
    <div className="absolute top-2/3 left-1/2 w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-purple-400/50 animate-pulse"></div>
    <div className="absolute bottom-1/3 right-1/3 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-300/50 animate-pulse-slow"></div>
  </>
);

// UI component for decorative elements used in the HowItWorks section
export const HowItWorksDecorations = () => (
  <>
    {/* Large blurred circles */}
    <div className="absolute top-[15%] right-[10%] w-16 xs:w-20 sm:w-24 md:w-32 lg:w-40 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
    <div className="absolute bottom-[20%] left-[8%] w-16 xs:w-20 sm:w-28 md:w-36 lg:w-44 h-16 xs:h-20 sm:h-28 md:h-36 lg:h-44 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/10 blur-2xl"></div>
    <div className="absolute top-[40%] right-[25%] w-12 xs:w-16 sm:w-20 md:w-28 h-12 xs:h-16 sm:h-20 md:h-28 rounded-full bg-gradient-to-r from-indigo-500/15 to-purple-500/10 blur-xl"></div>
    
    {/* Animated dots */}
    <div className="absolute top-1/4 right-1/3 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
    <div className="absolute bottom-1/4 left-1/4 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-indigo-400/50 animate-pulse"></div>
    <div className="absolute top-1/2 right-1/4 w-2 xs:w-3 sm:w-4 md:w-5 h-2 xs:h-3 sm:h-4 md:h-5 rounded-full bg-cyan-400/50 animate-pulse-slow"></div>
    <div className="absolute top-2/3 left-1/2 w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-purple-400/50 animate-pulse"></div>
    <div className="absolute bottom-1/3 right-1/3 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-300/50 animate-pulse-slow"></div>
  </>
);

// UI component for decorative elements used in the CTA section
export const CTADecorations = () => (
  <>
    {/* Large blurred circles */}
    <div className="absolute top-[10%] md:top-[15%] right-[5%] md:right-[10%] w-16 xs:w-20 sm:w-24 md:w-32 lg:w-40 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-2xl"></div>
    <div className="absolute bottom-[15%] md:bottom-[20%] left-[5%] md:left-[8%] w-16 xs:w-20 sm:w-28 md:w-36 lg:w-44 h-16 xs:h-20 sm:h-28 md:h-36 lg:h-44 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/10 blur-2xl"></div>
    <div className="absolute top-[55%] md:top-[60%] left-[35%] md:left-[40%] w-12 xs:w-16 sm:w-20 md:w-28 h-12 xs:h-16 sm:h-20 md:h-28 rounded-full bg-gradient-to-r from-indigo-500/15 to-purple-500/10 blur-xl"></div>
    
    {/* Animated dots */}
    <div className="absolute top-1/4 right-1/3 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-400/50"></div>
    <div className="absolute bottom-1/4 left-1/4 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-indigo-400/50"></div>
    <div className="absolute top-1/2 right-1/4 w-2 xs:w-3 sm:w-4 md:w-5 h-2 xs:h-3 sm:h-4 md:h-5 rounded-full bg-cyan-400/50"></div>
  </>
); 
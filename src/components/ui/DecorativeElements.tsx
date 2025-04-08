'use client';

// UI component for decorative elements used in the Hero section
export const HeroDecorations = () => (
  <>
    {/* Gradient backgrounds */}
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
    <div className="absolute top-16 right-1/4 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
  </>
);

// UI component for decorative elements used in the Problem section
export const ProblemDecorations = () => (
  <>
    <div className="absolute top-[10%] left-[5%] w-12 xs:w-16 sm:w-20 md:w-28 lg:w-32 h-12 xs:h-16 sm:h-20 md:h-28 lg:h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/10 blur-2xl"></div>
    <div className="absolute bottom-[10%] right-[5%] w-16 xs:w-20 sm:w-24 md:w-32 lg:w-40 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/10 blur-2xl"></div>
    
    <div className="absolute top-1/4 right-1/4 w-2 xs:w-3 sm:w-4 h-2 xs:h-3 sm:h-4 rounded-full bg-indigo-400/50 animate-pulse"></div>
    <div className="absolute bottom-1/3 left-1/3 w-1.5 xs:w-2 sm:w-3 h-1.5 xs:h-2 sm:h-3 rounded-full bg-pink-400/50 animate-pulse-slow"></div>
    <div className="absolute top-1/2 right-1/2 w-2 xs:w-3 sm:w-4 md:w-5 h-2 xs:h-3 sm:h-4 md:h-5 rounded-full bg-purple-400/50 animate-pulse"></div>
  </>
); 
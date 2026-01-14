"use client";

import React from 'react';
// Import the fonts
import localFont from "next/font/local";

const fuzzyBubblesBoldFont = localFont({
  src: "../../fonts/FuzzyBubbles-Bold.ttf",
  display: "swap",
  variable: "--font-fuzzy-bubbles-bold",
});

const Overview: React.FC = () => {
  return (
    // Background remains #D9D9D9 to match the source image
    <div className="w-full min-h-screen bg-white jakarta-font py-8 md:py-12 px-4 md:px-6">
      {/* RESPONSIVE STRATEGY:
          - Mobile: Default padding, no extra left margin.
          - Tablet (md): pl-16 to move it "righter".
          - Desktop (lg): pl-32 for a distinct left-aligned look.
      */}
      <div className="max-w-6xl ml-0 md:pl-16 lg:pl-32 space-y-10 md:space-y-12">
        
        {/* Section 1: What is AI? */}
        <section className="space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black">
            What is <span className="text-purple-600">AI</span> ?
          </h1>

          <div className="relative text-lg md:text-2xl leading-relaxed text-gray-800">
            <p className="inline-block">
              <span className="text-purple-700 font-bold">Artificial Intelligence (AI)</span> is the simulation of{''}
              <span className="relative inline-block px-2 md:px-4 mx-1">
                human intelligence
                {/* FIXED OVAL: 
                    The viewBox and ellipse are now matched to ensure the stroke isn't cut off.
                */}
                <svg 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[140%] text-gray-600 pointer-events-none" 
                  viewBox="0 0 180 60" 
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <ellipse 
                    cx="90" 
                    cy="30" 
                    rx="85" 
                    ry="25" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                  />
                </svg>
              </span>
              {''} in machines that are programmed to{' '}
              <span className="text-purple-600 font-medium">think, learn, and problem-solve</span> like humans.
            </p>

            {/* Handwritten Note style */}
            <p className={`${fuzzyBubblesBoldFont.className} mt-6 italic text-purple-700 font-medium text-xl`} >
              Machines that can "think" for themselves!
            </p>
          </div>

          {/* Purple Highlight Box */}
          <div className="bg-purple-400/80 border-l-[6px] border-purple-600 p-5 md:p-8 rounded-r-xl shadow-sm max-w-4xl">
            <p className="text-gray-900 font-semibold text-base md:text-xl leading-snug">
              AI systems can perform tasks that typically require human intelligence: visual perception, 
              speech recognition, decision-making, and language translation.
            </p>
          </div>
        </section>

        {/* Section 2: Three Main Types */}
        <section className="space-y-6 md:space-y-8 pt-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black">
            Three Main Types of <span className="text-purple-600">AI</span> ?
          </h2>

          <div className="space-y-8 md:space-y-10">
            {/* Narrow AI */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-purple-700 text-xl md:text-2xl font-bold">
                Narrow AI (Weak AI) <span className="text-gray-800 font-normal">- Designed for specific tasks</span>
              </h3>
              <ul className="list-disc ml-6 md:ml-8 text-lg md:text-xl font-medium text-gray-800 space-y-1">
                <li>Virtual Assistants</li>
                <li>Recommendation Systems</li>
              </ul>
            </div>

            {/* General AI */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-purple-700 text-xl md:text-2xl font-bold">
                General AI (Strong AI) <span className="text-gray-800 font-normal">- Human level intelligence</span>
              </h3>
              <ul className="list-disc ml-6 md:ml-8 text-lg md:text-xl font-medium text-gray-800 space-y-1">
                <li>Can understand and learn any intellectual task</li>
                <li className="relative inline-block">
                  <span className={`${fuzzyBubblesBoldFont.className} text-purple-700 italic border-b-2 border-purple-400`} >
                    Still theoretical!
                  </span>
                </li>
              </ul>
            </div>

            {/* Super AI */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-purple-700 text-xl md:text-2xl font-bold">
                Super AI <span className="text-gray-800 font-normal">- Beyond intelligence</span>
              </h3>
              <ul className="list-disc ml-6 md:ml-8 text-lg md:text-xl font-medium text-gray-800 space-y-1">
                <li>Hypothetical future AI</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Overview;
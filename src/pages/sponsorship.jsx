import React from 'react';

function Sponsors() {
  return (
    <div className="relative w-screen bg-custom-black text-custom-white py-12 px-6 md:px-20 flex flex-col items-center">
      {/* Top custom-white Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-custom-white"></div>

      {/* Our Sponsors Section */}
      <h2 className="text-center text-5xl md:text-7xl font-seasons_r mb-6">
        OUR <span className="text-custom-yellow">SPONSORS.</span>
      </h2>
      <div className="w-full max-w-screen-xl space-y-4">
        <div className="border border-custom-yellow rounded-[15px] p-8 h-24 md:h-32 w-full"></div>
        <div className="border border-custom-yellow rounded-[15px] p-6 h-16 md:h-22 w-full"></div>
        <div className="border border-custom-yellow rounded-[15px] p-6 h-14 md:h-18 w-full"></div>
      </div>

      {/* Community Partners Section */}
      <h2 className="text-center text-3xl md:text-5xl font-seasons_r mt-12 mb-6">
        COMMUNITY <span className="text-custom-yellow">PARTNERS.</span>
      </h2>
      <div className="w-full max-w-screen-xl">
        <div className="border border-custom-yellow rounded-[15px] p-8 h-22 md:h-30 w-full"></div>
      </div>

      {/* Bottom custom-white Line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-custom-white"></div>
    </div>
  );
}

export default Sponsors;

import React, { useState, useRef } from "react";
// import PlayIcon from "../../assets/icons/Play.svg";

const VideoShowcaseSection = ({ className }) => {
  const [, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Desktop click to toggle play
  const handleClick = () => {
    setIsPlaying((prev) => {
      const next = !prev;
      if (videoRef.current) {
        if (next) {
          videoRef.current.muted = false;
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
      return next;
    });
  };

  // Mobile tap-to-play (you already had this)
  const handleTouch = () => {
    setIsPlaying((prev) => {
      const next = !prev;
      if (videoRef.current) {
        if (next) {
          videoRef.current.muted = false;
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
      return next;
    });
  };

  return (
    <section
      className={`max-w-6xl z-10 mt-[10%] mx-auto flex flex-col lg:flex-row 
              items-center gap-10 lg:gap-20 px-4 ${className}`}
    >
      {/* Video Box */}
      <div
        className="relative w-full lg:w-1/2 flex justify-center lg:justify-between order-1"
        onTouchStart={handleTouch}
      >
        <div
          className="relative w-full max-w-[610px] 
                 h-[380px] md:h-[620px]  /* tablet & up keep desktop height */
                 md:max-w-[610px]        /* lock tablet width */
                 rounded-[20px] p-[4px] bg-gradient-to-br 
                 from-[#FFD369] to-[#FFB800] shadow-[0_0_30px_#FFD369]"
          onClick={handleClick}
        >
          <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-black">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/diqmmch5o/video/upload/v1757497702/lv_0_20250828142414_1_pkuphp.mp4"
              className="w-full h-full object-cover"
              playsInline
              controls
              poster="https://res.cloudinary.com/diqmmch5o/video/upload/so_39.5/v1757497702/lv_0_20250828142414_1_pkuphp.jpg"
            />
          </div>
        </div>
      </div>

      {/* Mobile + Tablet Text */}
      <div className="flex-1 text-white text-center md:text-left order-2 block lg:hidden mt-6 md:mt-8 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-4">
          Why Do You Always Get Stopped Out?
        </h3>
        <p className="text-[#CCCCCC] text-sm sm:text-base md:text-lg leading-relaxed">
          It’s not bad luck — it’s by design. Institutions hunt retail
          stop-losses daily. In this session, I’ll show you exactly how the “big
          money” manipulates the game, and how to flip their
          strategy&nbsp;into&nbsp;your&nbsp;edge.
        </p>
      </div>

      {/* Large Screen Text */}
      <div className="flex-1 text-white text-left order-2 hidden lg:block">
        <h3 className="lg:text-3xl text-2xl font-bold leading-snug mb-4">
          Why Do You Always Get Stopped Out?
        </h3>
        <ul className="text-[#CCCCCC] text-lg lg:text-2xl leading-relaxed list-disc list-outside space-y-2">
          <li>It’s not bad luck — it’s by design.</li>
          <li>Institutions hunt retail stop-losses daily.</li>
          <li>
            In this session, I’ll show you exactly how the “big money”
            manipulates the game.
          </li>
          <li>Learn how to flip their strategy into your edge.</li>
          <li>
            Discover the hidden patterns institutions use to trap traders.
          </li>
          <li>Uncover why most retail strategies fail against smart money.</li>
          <li>
            Master the mindset needed to trade with clarity and confidence.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;

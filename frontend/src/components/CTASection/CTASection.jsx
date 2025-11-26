import { FaChevronRight } from "react-icons/fa";
import { useModal } from "../hooks/useModal";

const CTASection = () => {
  const { openModal } = useModal();

  const Button = ({ children, className = "" }) => {
    const handleClick = () => {
      // Fire FB Pixel event
      if (window.fbq) {
        window.fbq("track", "Lead");
        console.log("FB Pixel: Lead event triggered");
      } else {
        console.warn("FB Pixel not loaded yet");
      }

      // Then open modal
      openModal();
    };

    return (
      <button
        onClick={handleClick}
        className={`group relative w-[200px] sm:w-[220px] h-[55px] sm:h-[62px] flex justify-center items-center px-6 rounded-full bg-[#FFC02B] text-[#212121] font-bold text-lg overflow-hidden transition-all duration-300 shadow-[0_0_30px_#FFC02B] ${className}`}
      >
        {/* Animated background */}
        <span className="absolute top-0 left-0 h-full w-0 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>

        {/* Text */}
        <span className="relative z-10 flex justify-center items-center gap-2 group-hover:text-[#000000] transition-colors duration-300">
          {children}
          <FaChevronRight className="text-sm" />
        </span>
      </button>
    );
  };

  return (
    <section className="relative text-center pt-16 pb-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="cal-sans-regular text-center mb-8 text-white text-3xl md:text-[40px] font-bold uppercase mx-auto tracking-wider px-4 leading-[2rem] md:leading-[3rem]">
          READY TO TRANSFORM YOUR{" "}
          <br className="hidden md:block" />{" "}
          <span className="text-[#FFC02B]">TRADING</span> GAME?
        </h2>

        {/* Subtext */}
        <p className="text-white mb-8 text-base md:text-lg w-[70%] md:w-full sora-regular mx-auto">
          Secure Your Seat Now And Start Seeing Your Trades In A New Light.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button>Save My Seat</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

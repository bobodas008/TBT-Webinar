import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import Docs from "../../assets/icons/docs.svg";
import TwoPerson from "../../assets/icons/twoPerson.svg";
import VerifiedTick from "../../assets/icons/verifiedTick.svg";
import Live from "../../assets/icons/live.svg";
import Team from "../../assets/icons/team.svg";
import Calender from "../../assets/icons/calender.svg";
// import Clock from "../../assets/icons/clock.svg";
import Coin from "../../assets/icons/Coin.svg";
// import HeroSectionImg from "../../assets/images/HeroSectionImg.png";
import { useModal } from "../hooks/useModal";

const HeroMain = ({ webinarDate, className }) => {
  const { openModal } = useModal();

  const Button = ({ children, className = "" }) => {
    const handleClick = () => {
      // Fire FB Lead event when user clicks "Save My Seat"
      if (window.fbq) {
        window.fbq("track", "Lead");
        console.log("FB Pixel: Lead event triggered");
      } else {
        console.warn("FB Pixel not loaded yet");
      }

      // Then open your registration modal
      openModal();
    };

    return (
      <button
        className={`group relative w-full py-4 px-8 rounded-full bg-[#FFC02B] text-[#212121] font-black text-lg overflow-hidden transition-all duration-300 ${className}`}
        onClick={handleClick}
      >
        <span className="absolute top-0 left-0 h-full w-0 rounded-2xl bg-[#ffffff] transition-all duration-300 ease-in-out group-hover:w-full"></span>
        <span className="relative z-10 flex justify-center items-center gap-2 group-hover:text-[#000000] transition-colors duration-300">
          {children} <FaChevronRight />
        </span>
      </button>
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: VerifiedTick,
      text: "Winning Trade Setup Framework",
      alt: "Verified Tick",
    },
    {
      icon: TwoPerson,
      text: "Learn to Trade With Institutes",
      alt: "Community Icon",
    },
    { icon: Live, text: "Live Trade Breakdown", alt: "Live Icon" },
    {
      icon: Docs,
      text: 'Free Guide: "Master Risk Management"',
      alt: "Document Icon",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const date = new Date(webinarDate);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const finalDisplayDate = `${formattedDate}, ${formattedTime}`;

  return (
    <div
      className={`relative gradient-border-container mt-6 w-full max-w-6xl ${className}`}
      id="hero"
    >
      <div className="gradient-border-inner bg-gradient-to-br from-[#FFD369] to-[#FFB800] shadow-[0_0_20px_#FFD369] md:shadow-[0_0_30px_#FFD369]">
        {/* --- DESKTOP + TABLET LAYOUT (md and up) --- */}
        <div className="hidden md:grid gap-0 items-center grid-cols-[45%_55%]">
          <div className="h-full p-2">
            <img
              src="https://res.cloudinary.com/df1rboxpa/image/upload/f_auto,q_auto/v1758016002/HeroSectionImg_nyieqy.png"
              alt="Anubrata Das, Founder of The Bengal Trader"
              className="flex absolute h-[110%] object-cover -top-12 left-10
                 md:h-[100%] md:-top-2.5 md:left-3 lg:h-[110%] lg:-top-18 lg:left-15 overflow-hidden"
            />
          </div>
          <div
            className="p-4 md:p-6 lg:p-10 flex flex-col gap-4 md:gap-5 lg:gap-6 
                  bg-black text-white rounded-r-[50px] md:rounded-r-[60px] lg:rounded-r-[75px] 
                  justify-center items-center"
          >
            {/* Heading */}
            <div className="text-center relative z-10">
              <p className="sora-regular tracking-widest text-sm md:text-base lg:text-lg font-light">
                THE TRADING BLUEPRINT BY
              </p>
              <h1
                className="sorts-mill-goudy tracking-wide leading-relaxed 
                     text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                ANUBRATA DAS
              </h1>
              <p className="sorts-mill-goudy tracking-wide text-sm md:text-base lg:text-lg">
                Founder of The Bengal Trader & TradeScribe
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 text-white text-xs md:text-sm lg:text-base relative z-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 md:gap-3 lg:gap-4 
                     bg-[#222222] px-3 py-2 md:px-3 md:py-2 rounded-xl md:rounded-2xl h-full"
                >
                  <img
                    src={feature.icon}
                    alt={feature.alt}
                    className="w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 flex-shrink-0"
                  />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Date & Session Info */}
            <div
              className="flex justify-center gap-3 md:gap-6 lg:gap-8 
                    text-white border-t border-b border-gray-600 py-3 md:py-4 
                    font-medium md:font-semibold relative z-10 text-xs md:text-sm lg:text-base"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={Calender}
                  alt="Calendar"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                <span>{finalDisplayDate}</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={Team}
                  alt="Zoom"
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                />
                Live Session on Zoom
              </div>
            </div>

            {/* Pricing + Button */}
            <div className="flex flex-col gap-2 md:gap-3 relative z-10">
              <p
                className="text-center text-white flex gap-2 md:gap-3 
                   text-sm md:text-base lg:text-lg font-semibold 
                   items-center justify-center"
              >
                <img src={Coin} alt="Coin" className="w-5 h-5 md:w-6 md:h-6" />
                <strike>₹999</strike> - Zero For Today Only /-
              </p>
              <Button className="text-sm md:text-base lg:text-lg py-3 md:py-4">
                Save My Seat
              </Button>
            </div>
          </div>
        </div>

        {/* --- MOBILE LAYOUT --- */}
        <div className="md:hidden flex flex-col">
          <div className="relative h-[22rem] w-full">
            <img
              src="https://res.cloudinary.com/df1rboxpa/image/upload/f_auto,q_auto/v1758016002/HeroSectionImg_nyieqy.png"
              alt="Anubrata Das"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full object-contain"
            />
          </div>
          <div className="p-4 flex flex-col gap-6 bg-black text-white w-full rounded-b-[44px] items-center text-center">
            <div className="text-center space-y-2 pt-4">
              <p className="sora-regular tracking-widest text-sm font-light">
                THE TRADING BLUEPRINT BY
              </p>
              <h1 className="sorts-mill-goudy tracking-wide leading-relaxed text-[32px] font-bold">
                ANUBRATA DAS
              </h1>
              <p className="sorts-mill-goudy tracking-wide text-base">
                Founder of The Bengal Trader
              </p>
            </div>

            <div className="w-[80%] h-[60px] relative overflow-hidden rounded-2xl">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out "
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#222222] px-4 flex-shrink-0 w-full h-full flex items-center justify-center gap-4 text-sm"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.alt}
                      className="w-6 h-6 flex-shrink-0"
                    />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 text-white font-semibold w-full items-center">
              <div className="flex items-center gap-3">
                <img src={Calender} alt="Calendar" className="w-6 h-6" />
                <span>{finalDisplayDate}</span>
              </div>
              <div className="flex items-center gap-3">
                {/* <img src={Clock} alt="Clock" className="w-6 h-6" />
                <span>Duration: 2 hours</span> */}
                <img src={Team} alt="Zoom" className="w-8 h-8" />
                <span>Live Session on Zoom</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={Coin} alt="Coin" className="w-6 h-6" />
                <strike>₹999</strike> - Zero For Today Only /-
              </div>
            </div>
            <div className="w-full">
              <Button>Save My Seat</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;

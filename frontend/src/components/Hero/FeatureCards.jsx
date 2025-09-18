import { useState,useEffect } from "react";
import GrowthIcon from "../../assets/images/Growth.png";
import SebiReg from "../../assets/images/SebiReg.png";
import MembersIcon from "../../assets/images/MembersIcon.png";

const features = [
  {
    title: "Learn from a SEBI-Reg RA",
    description:
      "7+ years in the market, guiding traders with institutional-level insights and proven experience.",
    img: GrowthIcon
  },
  {
    title: "Actionable Market Insights",
    description:
      "Understand liquidity, structure, and traps — the way institutions trade, not retail guesswork.",
      img: SebiReg
  },
  {
    title: "Join an Elite Trader Circle",
    description:
      "Connect with serious traders, share strategies, and grow together with ongoing support.",
      img: MembersIcon
  },
];

const FeatureCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % features.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="w-full max-w-6xl mt-6 px-4">
            {/* --- Desktop Grid --- */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-[#3D3D3D] p-6 rounded-3xl flex flex-row gap-4 items-center z-10 h-full"
                    >
                        <img src={feature.img} alt="" className="w-12 h-12 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg text-[#FFC02B] pb-1">
                                {feature.title}
                            </h3>
                            <p className="text-white text-sm leading-snug">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Mobile Swiper & Tablet --- */}
            <div className="lg:hidden relative overflow-hidden rounded-3xl w-full md:w-[70%] mx-auto">
                <div
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#3D3D3D] px-5 py-4 flex flex-row gap-4 items-center w-full flex-shrink-0"
                        >
                            <img src={feature.img} alt="" className="w-10 h-10 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-base text-[#FFC02B] pb-1 md:text-xl">
                                    {feature.title}
                                </h3>
                                <p className="text-white text-xs md:text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureCards;

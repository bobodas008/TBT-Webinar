import HeaderBadge from "./HeaderBadge";
import HeroTitle from "./HeroTitle";
import CountdownTimer from "./CountdownTimer";
import FeatureCards from "./FeatureCards";
import HeroMain from "./HeroMain";
import WebArrow from "../../assets/images/WebArrow.png";
// import chartBg from "../../assets/images/heroBg.png";
import VideoShowcaseSection from "../VideoShowcase/VideoShowcaseSection";
import { WEBINAR_DATE } from "../../webinarDate.js";

const HeroSection = () => {
  return (
    <section className="relative text-white min-h-screen py-5 px-4 sm:px-6 lg:px-8 hero-section-fix">
      {/* Blur */}
      <div
        className="pointer-events-none absolute blur-[120px] z-10 -left-[30%] -top-[10%] hidden md:block"
        style={{
          width: "816px",
          height: "816px",
          background:
            "linear-gradient(180deg, rgba(178,178,178,1) 0%, rgba(178,178,178,0) 86%)",
          opacity: 0.2,
        }}
      />
      {/* Desktop version */}
      <img
        src="https://res.cloudinary.com/df1rboxpa/image/upload/f_auto,q_auto,w_1600/v1758017606/heroBg_jkdd3a.png"
        alt="Chart background"
        className="absolute object-contain -top-4 hidden md:block"
      />

      {/* Mobile version */}
      <img
        src="https://res.cloudinary.com/df1rboxpa/image/upload/f_auto,q_auto,w_1000/v1758017606/heroBg_jkdd3a.png"
        alt="Chart background mobile"
        className="absolute inset-0 object-cover block md:hidden"
        style={{ width: "1000px", height: "681px" }}
      />
      <div className="w-full mx-auto flex flex-col items-center gap-6">
        <HeaderBadge />
        <HeroTitle />
        <img
          src={WebArrow}
          alt=""
          className="absolute w-18 h-16 rotate-x-180 -rotate-20 invert-1 top-[14%] left-[9%] md:-rotate-10 md:w-18 md:h-16 md:left-[37%] md:top-68"
        />
        <CountdownTimer webinarDate={WEBINAR_DATE} />
        <FeatureCards />
        <HeroMain webinarDate={WEBINAR_DATE} className="hidden md:block" />
      </div>
      <div className="w-full mx-auto flex flex-col justify-center items-center gap-6">
        <div className="order-2 w-full block md:hidden">
          <HeroMain webinarDate={WEBINAR_DATE} />
        </div>
        <div className="order-1 w-full block md:hidden">
          <VideoShowcaseSection />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

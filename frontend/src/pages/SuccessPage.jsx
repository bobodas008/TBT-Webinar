import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) navigate("/");
    else {
      // Fire the CompleteRegistration event after successful registration
      if (window.fbq) {
        window.fbq("track", "CompleteRegistration");
      }
    }
  }, [token, navigate]);

  if (!token) return null;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#212121] text-white px-4 text-center">

      {/* ✅ Meta Pixel for Thank You Page */}
      <Helmet>
        <script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1547817959565880');
          fbq('track', 'PageView');
          fbq('track', 'CompleteRegistration');`}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1547817959565880&ev=PageView&noscript=1"/>`}
        </noscript>
      </Helmet>

      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFC02B]">
        🎉 Registration Successful!
      </h1>
      <p className="text-lg md:text-xl mb-4">
        Thank you for securing your seat!
      </p>
      <p className="mb-8">Click below to join the exclusive WhatsApp group:</p>
      <a
        href="https://whatsapp.com/channel/0029VafTVwG5fM5cIXuiz536"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-[#FFC02B] text-[#212121] font-bold rounded-full hover:bg-yellow-400 transition-colors"
      >
        Join WhatsApp Community Now
      </a>
    </div>
  );
};

export default SuccessPage;

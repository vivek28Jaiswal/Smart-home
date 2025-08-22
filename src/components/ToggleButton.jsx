import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const ToggleButton = ({ onLabel = "ON", offLabel = "OFF" }) => {
  const [isOn, setIsOn] = useState(false);
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (isOn) {
      gsap.to(circleRef.current, {
        x: 32,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(containerRef.current, {
        backgroundColor: "rgba(44, 40, 40, 0.16)",
        backdropFilter: "blur(12px)",
        duration: 0.3,
      });
      gsap.to(textRef.current, {
        opacity: 0,
        y: -5,
        duration: 0.2,
        onComplete: () => {
          textRef.current.textContent = onLabel;
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 5 },
            { opacity: 1, y: 0, duration: 0.3 }
          );
        },
      });
    } else {
      gsap.to(circleRef.current, {
        x: 4,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(containerRef.current, {
        backgroundColor: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(12px)",
        duration: 0.3,
      });
      gsap.to(textRef.current, {
        opacity: 0,
        y: -5,
        duration: 0.2,
        onComplete: () => {
          textRef.current.textContent = offLabel;
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 5 },
            { opacity: 1, y: 0, duration: 0.3 }
          );
        },
      });
    }
  }, [isOn]);

  return (
    <div
      ref={containerRef}
      onClick={() => setIsOn(!isOn)}
      className="relative flex items-center w-16 h-8 rounded-full cursor-pointer select-none shadow-lg border border-white/20"
      style={{
        backgroundColor: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        ref={circleRef}
        className="absolute w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-black shadow-md border border-white/30"
        style={{
          backgroundColor: "white",
          backdropFilter: "blur(8px)",
          left: 0,
          top: "4px",
        }}
      >
        <span ref={textRef}>{offLabel}</span>
      </div>
    </div>
  );
};

export default ToggleButton;

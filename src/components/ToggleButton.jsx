import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";

const ToggleButton = ({
  onLabel = "ON",
  offLabel = "OFF",
  isOn: controlledIsOn,
  setIsOn: controlledSetIsOn,
}) => {
  const isControlled = typeof controlledSetIsOn === "function";
  const [internalOn, setInternalOn] = useState(false);
  const isOn = isControlled ? controlledIsOn : internalOn;
  const setIsOn = isControlled ? controlledSetIsOn : setInternalOn;

  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (circleRef.current) gsap.set(circleRef.current, { x: isOn ? 32 : 4 });
    if (containerRef.current)
      gsap.set(containerRef.current, {
        backgroundColor: isOn ? "rgba(44,40,40,0.16)" : "rgba(0,0,0,0.4)",
      });
    if (textRef.current) textRef.current.textContent = isOn ? onLabel : offLabel;
  }, []);

  // Animation effect 
  useEffect(() => {
    gsap.to(circleRef.current, {
      x: isOn ? 32 : 4,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(containerRef.current, {
      backgroundColor: isOn ? "rgba(44,40,40,0.16)" : "rgba(0,0,0,0.4)",
      backdropFilter: "blur(12px)",
      duration: 0.28,
    });

    gsap.to(textRef.current, {
      opacity: 0,
      y: -5,
      duration: 0.12,
      onComplete: () => {
        textRef.current.textContent = isOn ? onLabel : offLabel;
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.22 }
        );
      },
    });
  }, [isOn, onLabel, offLabel]);

  return (
    <div
      ref={containerRef}
      onClick={() => setIsOn(!isOn)}
      className="relative flex items-center w-16 h-8 rounded-full cursor-pointer select-none shadow-lg border border-white/20 z-40"
      style={{
        backgroundColor: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(12px)",
      }}
      aria-pressed={isOn}
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
        <span ref={textRef}>{isOn ? onLabel : offLabel}</span>
      </div>
    </div>
  );
};

export default ToggleButton;

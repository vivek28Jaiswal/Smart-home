import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ToggleButton from "./ToggleButton";
import { IoAddOutline } from "react-icons/io5";

const Overlay = ({ isOn }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOn) {
      gsap.to(overlayRef.current, {
        autoAlpha: 1, // opacity + visibility
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });
    }
  }, [isOn]);

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 z-10 flex items-center justify-center opacity-0 invisible"
    >
      {/* Background overlay */}
      <div className="w-full h-full bg-[url('/overlay.png')] bg-center bg-cover" />
    </div>
  );
};

const BentoCard = ({ title, subtitle, img, height, imgClass }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`relative ${height} w-full rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-white overflow-hidden`}
    >
      {/* Overlay */}
      <Overlay isOn={isOn} />

      {/* Image */}
      {img && (
        <img
          src={img}
          alt={title}
          className={`absolute object-contain z-20 ${
            imgClass || "-top-20 w-full h-full"
          }`}
        />
      )}

      {/* Content */}
      <div className="relative z-30 flex h-full items-end justify-between px-2 py-4">
        <div className="flex flex-col">
          <h1 className="text-lg leading-none">{title}</h1>
          <p className="text-xs">{subtitle}</p>
        </div>
        <ToggleButton isOn={isOn} setIsOn={setIsOn} />
      </div>
    </div>
  );
};

const BentoContainer = () => {
  return (
    <div className="flex flex-col gap-2">
      <BentoCard
        title="Conditioning"
        subtitle="4 rooms"
        img="/ac.png"
        height="h-44"
        imgClass="-top-10 w-2/3 h-2/3 left-1/2 -translate-x-1/2 top-1"
      />

      <div className="flex gap-2">
        <div className="leftBox flex flex-col gap-2 w-1/2">
          {/* Add Device */}
          <div className="addDevice h-18 flex items-center justify-center px-4 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-white">
            <h2 className="flex items-center justify-between gap-4 text-lg"><IoAddOutline /> Add device</h2>
          </div>

          {/* Security */}
          <BentoCard
            title="Security"
            subtitle="3 rooms"
            img="/camera.png"
            height="h-58"
            imgClass="w-2/2 h-2/3 left-1/2 -translate-x-1/2 top-5"
          />
        </div>

        {/* Lighting */}
        <div className="rightBox w-1/2">
          <BentoCard
            title="Lighting"
            subtitle="5 rooms"
            img="/light.png"
            height="h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BentoContainer;

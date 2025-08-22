import React from "react";
import ToggleButton from "./ToggleButton";

const Overlay = () => (
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <div className="w-full h-full bg-[url('/overlay.png')] bg-center bg-cover"></div>
  </div>
);

const BentoCard = ({ title, subtitle, img, height, imgClass }) => (
  <div
    className={`relative ${height} w-full rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-white overflow-hidden`}
  >
    {/* Overlay */}
    <Overlay />

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
      <ToggleButton />
    </div>
  </div>
);

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
          <div className="addDevice h-18 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-white flex items-center justify-center">
            <h2>Add device</h2>
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

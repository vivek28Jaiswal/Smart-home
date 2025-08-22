import React from "react";
import ToggleButton from "./ToggleButton";

const BentoContainer = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="acBox relative h-44 w-full rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-white flex items-end justify-between px-2 py-4 overflow-hidden">
        <div className="flex flex-col">
          <h1 className="text-xl leading-none">Conditioning</h1>
          <p className="text-xs">4 rooms</p>
        </div>
        <ToggleButton />
      </div>

      <div className="flex gap-2">
        <div className="leftBox flex flex-col gap-2 w-1/2">
          {/* Add Device */}
          <div className="addDevice h-18 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-white flex items-center justify-center">
            <h2>Add device</h2>
          </div>

          {/* Security Box */}
          <div className="security relative h-58 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-white flex items-end justify-between px-2 py-4 overflow-hidden">
            <div className="flex flex-col">
              <h1 className="text-xl leading-none">Security</h1>
              <p className="text-xs">3 rooms</p>
            </div>
            <ToggleButton />
          </div>
        </div>

        <div className="rightBox relative w-1/2 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-white overflow-hidden">
          {/* Centered Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-full h-full bg-[url('/lightOverlay.png')] bg-cover bg-right opacity-100"></div>
          </div>

          <img
            src="/light.png"
            alt="Light Icon"
            className="absolute -top-20 w-full h-full object-contain z-20"
          />

          {/* Content */}
          <div className="relative z-30 flex h-full items-end justify-between px-2 py-4">
            <div className="flex flex-col">
              <h1 className="text-xl leading-none">Lighting</h1>
              <p className="text-xs">5 rooms</p>
            </div>
            <ToggleButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoContainer;

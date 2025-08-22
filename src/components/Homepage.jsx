import React, { useEffect, useState } from "react";
import BentoContainer from "./BentoContainer";
import profilePic from "/images/profilePic.jpeg";
import { VscHome } from "react-icons/vsc";
import { PiBellSimpleRinging } from "react-icons/pi";
import { MdOutlineCastConnected } from "react-icons/md";
import { RiSettingsLine, RiUserSettingsLine } from "react-icons/ri";
import getWeatherData from "../utils/getWeather";

const tabs = [
  { label: "Home", icon: <VscHome />, active: true },
  { label: "Cast", icon: <MdOutlineCastConnected /> },
  { label: "Profile", icon: <RiUserSettingsLine /> },
  { label: "Settings", icon: <RiSettingsLine /> },
];

const Homepage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    getWeatherData()
      .then((res) => setData(res))
      .catch((err) => console.error("cannot fetch weather ", err));
  }, []);

  let now = new Date();
  let hours = now.getHours();

  // Greeting
  let greeting = "";
  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  let options = { weekday: "long", month: "long", day: "numeric" };
  let formattedDate = now.toLocaleDateString("en-US", options);

  return (
    <div className="parentContainer w-full px-4 py-6 pb-20">
      {/* Header */}
      <div className="header flex items-center justify-between">
        <div className="leftContainer flex items-center gap-4">
          <div className="profile h-12 w-12 rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={profilePic}
              alt="Profile"
            />
          </div>
          <div className="userName">
            <h2 className="text-sm font-medium font-['UrMedium']">
              {greeting}, Rose!
            </h2>
            <p className="text-xs text-neutral-400">{formattedDate}</p>
          </div>
        </div>
        <button className="rightContainer h-10 w-10 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-lg shadow-lg">
          <PiBellSimpleRinging className="text-lg" />
        </button>
      </div>

      {/* Energy & Weather Summary */}
      <div className="summaryCards grid grid-cols-2 gap-2 mt-4">
        {/* Energy Usage */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-lg">
          <h3 className="text-xs text-neutral-300">Energy Usage</h3>
          <p className="text-2xl font-semibold mt-2">64 kWh</p>
          <p className="text-xs text-neutral-400 mt-1">This month</p>
        </div>

        {/* Weather */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-lg">
          <h3 className="text-xs text-neutral-300">Weather</h3>
          <p className="text-2xl font-semibold mt-2">
            {Math.floor(data?.temperature)} °C
          </p>
          <p className="text-xs text-neutral-400 mt-1">{data?.description}</p>
        </div>
      </div>

      {/* Rooms */}
      <div className="rooms text-sm mt-6 flex justify-between items-center whitespace-nowrap gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {["Home", "Living room", "Bedroom", "Kitchen", "Garage"].map(
          (room, idx) => (
            <button
              key={idx}
              className="border border-white/40 rounded-full px-4 py-2 hover:bg-white/10 transition"
            >
              {room}
            </button>
          )
        )}
      </div>

      {/* Bento Containers */}
      <div className="bentoContainer mt-6 flex flex-col gap-2">
        <BentoContainer />
      </div>

      {/* Tab Bar */}
      <div className="tabBar fixed bottom-4 left-0 right-0 z-10 px-6">
        <div className="w-full bg-white/10 backdrop-blur-lg shadow-lg rounded-full flex items-center justify-around py-2">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-2 px-5 py-2 rounded-full transition ${
                tab.active
                  ? "bg-white text-black shadow-md"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.active && <span className="text-sm">{tab.label}</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;

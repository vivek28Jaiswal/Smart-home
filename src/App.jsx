import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";

export const App = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen bg-[#1C1A1B] text-white font-[UrRegular] flex items-center justify-center overflow-hidden">
      {isLargeScreen ? (
        <div className="text-center p-6">
          <h1 className="text-2xl font-bold">Laptop version in progress 🚧</h1>
          <p className="text-gray-300 mt-2">
            You can check the responsive mobile version 📱
          </p>
        </div>
      ) : (
        <Homepage />
      )}
    </div>
  );
};

export default App;

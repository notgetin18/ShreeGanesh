"use client";

import React, { useState, useEffect } from "react";

const page = () => {
  const [WD, setWD] = useState({
    winWidht: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setWD({
      winWidht: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [WD]);
  return (
    <div>
      <h2 className="text-3xl text-black">
        {WD.winWidht > 776 ? "NOW DESKTOP" : " ON MOBILE"}
      </h2>
    </div>
  );
};

export default page;

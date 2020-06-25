import React, { useState, useEffect } from "react";

export const useScroll = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const onScroll = (e) => {
    setPos({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return pos;
};

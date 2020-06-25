import React, { useEffect, useRef } from "react";

export const useFadin = (duration, delay) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      element.current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

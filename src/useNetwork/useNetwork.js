import React, { useEffect, useState } from "react";

export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const onNetwork = () => {
    onChange(navigator.onLine);
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", onNetwork);
    window.addEventListener("offline", onNetwork);
    return () => {
      window.removeEventListener("online", onNetwork);
      window.removeEventListener("offline", onNetwork);
    };
  }, []);
  return status;
};

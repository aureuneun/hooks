import React, { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (opts) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(false);
  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };
  const getData = async () => {
    const data = await axios(opts);
    setState({ ...state, loading: false, data });
  };
  useEffect(() => {
    getData();
  }, [trigger]);
  return { ...state, refetch };
};

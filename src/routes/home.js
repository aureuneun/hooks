import React, { useState, useEffect } from "react";
import useConfirm from "../useConfirm";

const Home = () => {
  const [value, setValue] = useState(0);
  const [aValue, setAvalue] = useState(0);
  useEffect(() => {
    console.log("hello");
    return () => {
      console.log("bye bye");
    };
  }, []);
  useEffect(() => {
    console.log(value, aValue);
    return () => {
      console.log("alskjfl");
    };
  }, [value, aValue]);
  const successed = () => console.log("success");
  const errored = () => console.log("error");
  const confirmed = useConfirm("hi", successed, errored);
  return (
    <div className="App">
      <button onClick={() => setValue(() => value + 1)}>Click me</button>
      <button onClick={() => setAvalue(() => aValue + 1)}>Click me</button>
      <button onClick={confirmed}>Click me</button>
    </div>
  );
};

export default Home;

import useBeforeLeave from "../useBeforeLeave";

const App = () => {
  const onBefore = () => console.log("leave");
  useBeforeLeave(onBefore);
  return <div></div>
};
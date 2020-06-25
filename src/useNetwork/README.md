import useNetwork from "../useNetwork";

const App = () => {
  const onNetworkChange = (status) => console.log(status);
  const status = useNetwork(onNetworkChange);
  return <div>{status ? "Online" : "Offline"}</div>;
};
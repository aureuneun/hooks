import useConfirm from "../useConfirm";

const App = () => {
  const successed = () => console.log("success");
  const errored = () => console.log("error");
  const confirmed = useConfirm("hi", successed, errored);
  return (
    <div className="App">
      <button onClick={confirmed}>Click me</button>
    </div>
  );
};
import useInput from "./useInput";

function App() {
  const validator = (value) => value.length <= 10;
  const name = useInput("", validator);
  return (
    <div className="App">
      <input placeholder="name" {...name} />
    </div>
  );
}
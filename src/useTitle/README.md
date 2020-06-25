import useTitle from "./useTitle";

function App() {
  const { setTitle } = useTitle("loading");
  setTimeout(() => setTitle("Home"), 5000);
  return <div className="App">title</div>;
}
import useClick from "../useClick";

const App = () => {
const sayHello = () => console.log("hello");
const element = useClick(sayHello);
return <div ref={element}>Click me</div>;
};

import useScroll from "../useScroll";

const About = () => {
  const { x, y } = useScroll();
  return (
    <div style={{ height: "400vh" }}>
      <span style={{ position: "fixed", color: y > 1000 ? "blue" : "red" }}>
        {y}
      </span>
    </div>
  );
};
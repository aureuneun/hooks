import useTabs from "./useTabs";

const contents = [
  {
    tab: "section1",
    content: "I'm the content of section 1",
  },
  {
    tab: "section2",
    content: "I'm the content of section 2",
  },
];

function App() {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <div className="App">
      <div>{currentItem.content}</div>
      {contents.map((content, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {content.tab}
        </button>
      ))}
    </div>
  );
}
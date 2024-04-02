import "./App.css";

function Title() {
  return (
    <>
      <div>This is title</div>
      <div>this is also a heading</div>
    </>
  );
}
function App() {
  return (
    <>
      <Title />
      {Title()}
      {"Answer of 100 + 200 is 300"}
      <h1 className="heading">Hello World</h1>
    </>
  );
}

export default App;

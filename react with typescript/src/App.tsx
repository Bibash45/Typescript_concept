import Component from "./starter/02-props";

function App() {
  return (
    <main>
      <Component name='peter' id={123} >
        <p>hi, peter</p>
      </Component>
      <Component name='bibash' id={456} />
    </main>
  );
}

export default App;

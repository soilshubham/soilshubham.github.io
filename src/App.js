import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <div className="relative h-full w-full p-4 md:p-24 overflow-hidden md:overflow-visible">
        <Homepage />
        <About />
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

import Example4 from "./components/Example4";
import Example5 from "./components/Example5";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Example1 />
        <Example2 />
        <Example3 /> */}
        <Example4 />
        <Example5 />
      </header>
    </div>
  );
}

export default App;

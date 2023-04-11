import logo from "./logo.svg";
import FunctionalGreeting from "./Components/FunctionalGreeting";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FunctionalGreeting greeting="nice to meet you" name="user" />
    </div>
  );
}

export default App;

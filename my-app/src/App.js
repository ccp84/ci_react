import logo from "./logo.svg";
// import FunctionalGreeting from "./Components/FunctionalGreeting";
import StatefulGreeting from "./Components/StatefulGreeting";
import "./App.css";

function App() {
    return (
        <div className="App">
            <StatefulGreeting name="user" />
        </div>
    );
}

export default App;

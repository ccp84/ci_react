import ConditionalRenderingClass from "./Components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./Components/ConditionalRenderingFunctional";

import "./App.css";

function App() {
	return (
		<div className="App">
			<ConditionalRenderingClass />
			<ConditionalRenderingFunctional connected={false} />
		</div>
	);
}

export default App;

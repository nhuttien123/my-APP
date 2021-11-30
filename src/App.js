import Home from "./Home/Index.jsx";

import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">{<Home></Home>}</div>
    </HashRouter>
  );
}

export default App;

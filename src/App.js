import Home from "./Home/Index.jsx";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">{<Home></Home>}</div>
    </BrowserRouter>
  );
}

export default App;

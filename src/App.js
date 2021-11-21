import Home from "./Home/Index.jsx";
import Page from "./Page";
import { Route } from "react-router-dom";

function App() {
  const token = localStorage.getItem("accessKey");

  return (
    <div className="App">
      {
        <Home>
          {Page.Site.map((site) => (
            <Route key={site.path} path={site.path} element={site.element} />
          ))}
        </Home>
      }
    </div>
  );
}

export default App;

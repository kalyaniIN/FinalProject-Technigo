import { BrowserRouter } from "react-router-dom";

import { CuisineType, NavBar, SearchForm } from "./components/Header";
import { Pages } from "./pages/Pages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <SearchForm />
        <CuisineType />
        <Pages />
      </BrowserRouter>
      <div style={{ marginTop: "100px", marginBottom: "50px" }}></div>
    </div>
  );
}

export default App;

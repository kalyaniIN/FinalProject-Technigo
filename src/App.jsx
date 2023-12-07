import "./App.css";
import { SearchForm } from "./components/Header/SearchForm";
import { NavBar } from "./components/Header/Navbar";

import { Pages } from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <SearchForm />
        <Pages />
      </BrowserRouter>
      <div style={{ marginTop: "100px", marginBottom: "50px" }}></div>
    </div>
  );
}

export default App;

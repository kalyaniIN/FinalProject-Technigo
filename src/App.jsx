
import './App.css'

import { Pages } from './pages/Pages';
import { BrowserRouter } from "react-router-dom";

function App() {
 

  return (
    <>
      
      <div className="App">
      <BrowserRouter>
       
       
        <Pages/>
      </BrowserRouter>
      <div style={{marginTop: "100px", marginBottom: "50px"}}>
        <p>Some icons are from <a href="https://fontawesome.com/">Font Awsome - version 5.15.4</a> under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0 License</a>.</p>
      </div>
    </div>
      
      
    </>
  )
}

export default App

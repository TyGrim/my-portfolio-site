import { BrowserRouter} from "react-router-dom";

import {About, Hero, Contact} from "./components" ;

const App = () => {

  return (
    <BrowserRouter>    
      <div>
        <Hero />
        <About />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App

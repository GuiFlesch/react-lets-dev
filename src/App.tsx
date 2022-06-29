import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AsyncAwait, Callback, FormBasico, FormCompleto, Home, ConsumindoApis } from "./telas";
import Promisses from "./telas/chamadas-api/promisses";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/consumindo-apis" element={<ConsumindoApis/>} />
      <Route path="/form-completo" element={<FormCompleto />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/asyncawait" element={<AsyncAwait />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;

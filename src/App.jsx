import { useState } from "react";
import "./App.css";
import Buscador from "./components/Buscador";
import Resultados from "./components/Resultados";

function App() {
  const [inputFilter, setInputFilter] = useState("");
  // console.log(inputFilter);
  return (
    <>
      <Buscador setInputFilter={setInputFilter} />

      <Resultados inputFilter={inputFilter} />
    </>
  );
}

export default App;

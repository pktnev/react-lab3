import { Route, Routes } from "react-router-dom";
import { Main } from "./page/Main";
import { Palette } from "./page/Palette";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/palette/*" element={<Palette />} />
      </Routes>
    </>
  )
}

export default App
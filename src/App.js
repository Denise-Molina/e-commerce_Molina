import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import FlexWrapper from "./components/FlexWrapper";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:cat" element={<ItemListContainer />} />
          <Route path="/detalle/:itemId"  element={<ItemDetailContainer />} />
          <Route path="/Cart/" element= {<h1>Detalles de compra</h1>} />
          <Route path="*" element={<h1>Error 404: Te perdiste</h1>} />
        </Routes>
        <FlexWrapper></FlexWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;

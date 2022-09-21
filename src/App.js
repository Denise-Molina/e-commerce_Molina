import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import FlexWrapper from "./components/FlexWrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <ItemListContainer /*greeting="Nuestros productos"*/ />
       <FlexWrapper> 
      </FlexWrapper>
    </div>
  );
}

export default App;

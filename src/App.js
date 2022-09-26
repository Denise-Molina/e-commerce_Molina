import "./App.css";
import Navbar from "./components/NavBar";
//import ItemListContainer from "./components/ItemListContainer";
import FlexWrapper from "./components/FlexWrapper";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      {/* <ItemListContainer />*/ }
       <ItemDetailContainer />
       <FlexWrapper> 
      </FlexWrapper>
    </div>
  );
}

export default App;

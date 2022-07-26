
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter './components/ItemLCount/ItemCount'  ;
import Button './components/Button/Button'  ;

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer greeting ="hola coders"/>
    </div>
  );
}

export default App;

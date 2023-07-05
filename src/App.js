import './App.css';
import './components/NavBar/nav-bar.css'
// import './components/ItemListContainer/ItemCount/Contador/item-count'
import { NavBar } from './components/NavBar/nav-bar.jsx';
import { Home } from './components/pages/home';
// import { CarritoItemCount }  from './components/ItemListContainer/ItemCount/item-count';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Home />
      
      {/* CONTADOR
       <CarritoItemCount stock={10} initial={0} onAdd={(quantity) => alert("Compraste "+ quantity +" unidades")}/> */
      }
    </div>
  );
}

export default App;

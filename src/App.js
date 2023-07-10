import './App.css';
import './components/NavBar/nav-bar.css'
import './components/ItemCount/item-count.css'
import { NavBar } from './components/NavBar/nav-bar.jsx';
import { Home } from './components/pages/home';
import { ItemDetailContainer } from './components/ItemDetailContainer/Item-container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemsList } from './components/ItemList/items-list';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path={'/'} Component={() => <Home />} />
          <Route exact path={'/products/:category'} Component={() => <ItemsList /> } />
          <Route exact path={'/products/:category/id'} element={() => <ItemDetailContainer /> }/>
          <Route exact path={'/cart'} Component={() => <p>Carrito</p> } />
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;

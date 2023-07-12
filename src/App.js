import './App.css';
import './components/NavBar/nav-bar.css'
import './components/ItemCount/item-count.css'
import { NavBar } from './components/NavBar/nav-bar.jsx';
import { Home } from './components/ItemListContainer/home'
import { ItemDetailContainer } from './components/ItemDetailContainer/Item-container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemsList } from './components/ItemList/items-list';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route exact path={'/products/:category'} element={<ItemsList /> } />
          <Route exact path={'/products/:category/:id'} element={<ItemDetailContainer /> }/>
          <Route exact path={'/cart'} element={ <p>Carritooooo</p> } />
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;

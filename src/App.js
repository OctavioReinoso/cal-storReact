import './App.css';
import './components/NavBar/nav-bar.css'
import './components/ItemCount/item-count.css'
import { NavBar } from './components/NavBar/nav-bar.jsx';
import { Home } from './components/ItemListContainer/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemContainer } from './components/ItemList/item-container';
// import { ItemDetail } from './components/ItemDetail/item-detail';
import { ItemDetailContainer } from './components/ItemDetailContainer/Item-container';
import { ContextProvider } from './context/contextProvider';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <NavBar />
          <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/products/:category'} element={<ItemContainer /> } />
            <Route exact path={'/products/:category/:id'} element={ <ItemDetailContainer /> }/>
            <Route exact path={'/cart'} element={ <p>Carritooooo</p> } />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

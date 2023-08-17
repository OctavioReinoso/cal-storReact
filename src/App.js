import './App.css';
import './components/NavBar/nav-bar.css'
import './components/ItemCount/item-count.css'
import { NavBar } from './components/NavBar/nav-bar.jsx';
import { Footer, Home } from './components/ItemListContainer/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemContainer } from './components/ItemList/item-container';
import { ItemDetailContainer } from './components/ItemDetailContainer/Item-detail-container';
import { ContextProvider } from './context/contextProvider';
import { Cart } from './components/Cart/cart';
// import { UserInfo } from './components/User/user-info';

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
            <Route exact path={'/cart'} element={<Cart /> } />
            {/* <Route exact path={'/checkout'} element={<UserInfo /> } /> */}
          </Routes>
        </ContextProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Header from './header/Header';
import ProductList from './products/productlist/ProductList';
import Cart from '../components/cart/Cart';
import { StoreProvider } from '../contexts/StoreContext';

function App() {
  return (
    <StoreProvider>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/shop" />} />
        <Route path="/shop" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route render={() => <Redirect to="/shop" />} />
      </Switch>
    </StoreProvider>
  );
}

export default App;

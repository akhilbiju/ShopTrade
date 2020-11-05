import './App.scss';
import Header from './header/Header';
import ProductList from './products/ProductList';
import { StoreProvider } from '../contexts/TodoContext';

function App() {
  return (
    <StoreProvider>
      <Header />
      <ProductList />
    </StoreProvider>
  );
}

export default App;

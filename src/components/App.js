import './App.scss';
import Cart from './cart/cart';
import { StoreProvider } from '../contexts/todoContext';

function App() {
  return (
    <StoreProvider>
      <Cart />
    </StoreProvider>
  );
}

export default App;

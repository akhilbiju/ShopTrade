import './App.scss';
import Header from './header/Header';
import { StoreProvider } from '../contexts/TodoContext';

function App() {
  return (
    <StoreProvider>
      <Header />
    </StoreProvider>
  );
}

export default App;

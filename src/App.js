import './App.css';
import ProductAdd from './components/ProductAdd';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <ProductAdd />
      </div>
      
      <div className="wrap">
        <ProductList />
      </div>
    </div>
  );
}

export default App;

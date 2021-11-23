import Navbar from "./components/Navbar";
import ProductShowcase from "./components/ProductShowcase";
import ProductDetails from "./components/ProductDetails";
import './components/css/product.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <ProductShowcase />
        <ProductDetails />
      </main>
    </div>
  );
}

export default App;

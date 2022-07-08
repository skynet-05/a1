import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';

function App() {
  const products = [{prodName: "Hamburger", prodPrice: "₹250", imagePath: "hamburger-494706_640.jpg"},
                    {prodName: "Hamburger", prodPrice: "₹250", imagePath: "hamburger-494706_640.jpg"},
                    {prodName: "Hamburger", prodPrice: "₹250", imagePath: "hamburger-494706_640.jpg"},
                    {prodName: "Hamburger", prodPrice: "₹250", imagePath: "hamburger-494706_640.jpg"},
                    {prodName: "Hamburger", prodPrice: "₹250", imagePath: "hamburger-494706_640.jpg"},
                    {prodName: "Men's trainers", prodPrice: "₹1250", imagePath: "public/logo512.png"},
                    {prodName: "Trendy shoes", imagePath: "images/shoes3.jpeg"},
                    {}];
  return (
    <div className="App">
      <NavBar />
       {/* <p>
      <a class="btn btn-primary" data-toggle="collapse" href="#productitem" role="button" aria-expanded="false" aria-controls="productitem">
        Link with href
      </a>
       <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#productitem" aria-expanded="false" aria-controls="productitem">
        Toggle
      </button>
      </p>  */}
      <div id='productitem' className='productitem'>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;

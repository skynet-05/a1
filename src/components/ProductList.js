import React from "react";
import ProductItem from "./ProductItem";

class ProductList extends React.Component {
  render() {
    return(
      <div className='container'>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
        {this.props.products.map(prod => (
          <ProductItem prodName={prod.prodName} prodPrice={prod.prodPrice} imagePath={prod.imagePath}/>
        ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
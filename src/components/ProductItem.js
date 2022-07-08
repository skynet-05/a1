import React from 'react';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isFav: false};
  }

  toggleFav = () => {
    let isFav = this.state.isFav;
    this.setState({isFav: !isFav});
  }

  render() {
    // Read the values from props.
    const prodName = this.props.prodName;
    const prodPrice = this.props.prodPrice;
    const imagePath = this.props.imagePath;
    // React element as a variable!
    // Refer: https://reactjs.org/docs/introducing-jsx.html
    // const imageElem = <img src={imagePath} alt='shoe' className='product-item__image' />

    return (
        <div className="col">
          <div className="card h-100 text-white bg-secondary mb-3">
            <img src={imagePath} className="card-img-top" alt="img"/>
            <div className="card-body">
              <h5 className="card-title">{prodName}</h5>
              <p className="card-text">{prodPrice}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default ProductItem;
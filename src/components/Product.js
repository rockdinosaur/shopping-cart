import React, { Component } from 'react';

class Product extends Component {
  handleAddToCart = () => {
    this.props.quantity && this.props.onAddToCartClick(this.props.id);
  }

  render() {
    const addToCartClasses = `button add-to-cart ${this.props.quantity ? '' : 'disabled'}`;

    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.title}</h3>
          <p className="price">{this.props.price}</p>
          <p className="quantity">{this.props.quantity} left in stock</p>
          <div className="actions product-actions">
            <a
              className={addToCartClasses}
              onClick={this.handleAddToCart}
            >Add to Cart</a>
            <a className="button edit">Edit</a>
          </div>
          <a className="delete-button"><span>X</span></a>
        </div>
      </div>
    );
  }
}

export default Product;

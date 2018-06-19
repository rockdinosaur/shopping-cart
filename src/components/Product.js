import React, { Component } from 'react';

class Product extends Component {
  handleAddToCart = () => {
    this.props.onAddToCartClick(this.props.id);
  }

  render() {
    return (
      <div class="product">
        <div class="product-details">
          <h3>{this.props.title}</h3>
          <p class="price">{this.props.price}</p>
          <p class="quantity">{this.props.quantity} left in stock</p>
          <div class="actions product-actions">
            <a
              class="button add-to-cart"
              onClick={this.handleAddToCart}
            >Add to Cart</a>
            <a class="button edit">Edit</a>
          </div>
          <a class="delete-button"><span>X</span></a>
        </div>
      </div>
    );
  }
}

export default Product;

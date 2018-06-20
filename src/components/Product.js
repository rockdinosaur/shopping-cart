import React, { Component } from 'react';

import ProductForm from './ProductForm';

class Product extends Component {
  state = {
    toggleEditForm: false
  }

  handleAddToCart = () => {
    this.props.quantity && this.props.onAddToCartClick(this.props.product.id);
  }

  handleDeleteProduct = () => {
    this.props.onDeleteProduct(this.props.product.id);
  }

  handleEditClick = () => {
    this.setState({ toggleEditForm: true });
  }

  render() {
    const addToCartClasses = `button add-to-cart ${this.props.product.quantity ? '' : 'disabled'}`;

    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.product.title}</h3>
          <p className="price">{this.props.product.price}</p>
          <p className="quantity">{this.props.product.quantity} left in stock</p>
          <div className="actions product-actions">
            <a
              className={addToCartClasses}
              onClick={this.handleAddToCart}
            >Add to Cart</a>
            <a
              className="button edit"
              onClick={this.handleEditClick}
            >Edit</a>
          </div>
          <a
            className="delete-button"
            onClick={this.handleDeleteProduct}
          ><span>X</span></a>
        </div>

        {this.state.toggleEditForm &&
          <ProductForm
            mode='edit'
            product={this.props.product}
            onEditProduct={this.props.onEditProduct}
          />}
      </div>
    );
  }
}

export default Product;

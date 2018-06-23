import React, { Component } from 'react';
import ProductForm from './ProductForm';

// Props:
// product = {}
// handleAddToCart
// handleDeleteProduct
// handleEditProduct

class Product extends Component {
  state = {
    toggleEditForm: false
  }

  handleAddToCart = () => {
    this.props.product.stock && this.props.handleAddToCart(this.props.product.id);
  }

  handleDeleteProduct = () => {
    this.props.handleDeleteProduct(this.props.product.id);
  }

  handleEditClick = () => {
    this.setState({ toggleEditForm: true });
  }

  handleEditCancel = () => {
    this.setState({ toggleEditForm: false });
  }

  render() {
    const addToCartClasses = `button add-to-cart ${this.props.product.stock ? '' : 'disabled'}`;

    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.product.title}</h3>
          <p className="price">{this.props.product.price}</p>
          <p className="quantity">{this.props.product.stock} left in stock</p>
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
            handleFormCancel={this.handleEditCancel}
            handleEditProduct={this.props.handleEditProduct}
          />}
      </div>
    );
  }
}

export default Product;

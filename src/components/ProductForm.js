import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductForm extends React.Component {
  static propTypes = {

  }

  state = {
    fields: {
      productName: '',
      productPrice: '',
      productQuantity: '',
    }
  }

  onFormSubmit = (e) => {
    const title = this.state.fields.productName;
    const quantity = this.state.fields.productQuantity;
    const price = this.state.fields.productPrice;
    const productToAdd = { title, quantity, price };
    this.props.onAddProduct(productToAdd);
    this.setState(prevState => {
      return {
        fields: {
          productName: '',
          productPrice: '',
          productQuantity: '',
        }
      }
    });
    e.preventDefault();
  }

  onInputChange = (e) => {
    const fields = {...this.state.fields};
    fields[e.target.name] = e.target.value;
    this.setState(prevState => { fields })
  }

  render() {
    return (
    <div className="add-form visible">
      <p>
        <a className="button add-product-button">Add A Product</a>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={this.onFormSubmit}>
        <div className="input-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            name="productName"
            id="product-name"
            defaultValue={this.state.fields.productName}
            onChange={this.onInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="productPrice">Price</label>
          <input
            type="text"
            name="productPrice"
            id="product-price"
            defaultValue={this.state.fields.productPrice}
            onChange={this.onInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="productQuantity">Quantity</label>
          <input
            type="text"
            name="productQuantity"
            id="product-quantity"
            defaultValue={this.state.fields.productQuantity}
            onChange={this.onInputChange}
          />
        </div>

        <div className="actions form-actions">
          <input
            type="submit"
            className="button"
            value="Add"
          />
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  )}
}

export default ProductForm;

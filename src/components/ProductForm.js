import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import store from '../store'

class ProductForm extends React.Component {
  state = {
    fields: {
      title: '',
      price: '',
      stock: '',
    },
    fieldErrors: {}
  }

  componentDidMount() {
    if (this.props.mode === 'edit') {
      this.setState({
        fields: {
          title: this.props.product.title,
          price: this.props.product.price,
          stock: this.props.product.stock
        }
      });
    }
  }

  handleFormCancel = () => {
    if (this.props.mode === 'edit') {
      this.props.onFormCancel();
    } else {
      this.setState(prevState => ({ fields: { title: '', price: '', stock: '' } }));
    }
  }

  validate = (product) => {
    const errors = {};
    if (!product.title) { errors.title = 'Title required.'; }
    this.validateNumber('price', product.price, errors);
    this.validateNumber('stock', product.stock, errors);
    return errors;
  }

  validateNumber(input, value, errors) {
    if (isNaN(value)) {
      errors[input] = 'Must be a number';
    } else if (value <= 0) {
      errors[input] = 'Value entered must be greater than 0';
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const product = {};
    product.title = this.state.fields.title;
    product.stock = parseInt(this.state.fields.stock);
    product.price = parseFloat(this.state.fields.price).toFixed(2);

    const fieldErrors = this.validate(product);
    this.setState({ fieldErrors: fieldErrors });
    if (Object.keys(fieldErrors).length) { return; }

    if (this.props.mode === 'add') {
      const addAction = {
        type: 'ADD_PRODUCT',
        productData: product,
      }
      store.dispatch(addAction);
    } else {
      const editAction = {
        type: 'EDIT_PRODUCT',
        productData: product,
        id: this.props.product.id
      }
      store.dispatch(editAction);
      this.props.onFormCancel();
    }
  }

  onInputChange = (e) => {
    const fields = { ...this.state.fields };
    fields[e.target.name] = e.target.value;
    this.setState(prevState => ({ fields: fields }));
  }

  render() {
    return (
      <div className="add-form visible">
        <h3>{this.props.mode === 'add' ? 'Add' : 'Edit'} Product</h3>
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group">
            <label htmlFor="title">Product Name</label>
            <input
              type="text"
              name="title"
              id="product-name"
              value={this.state.fields.title}
              onChange={this.onInputChange}
            />
          </div>

          <span style={{ color: 'red' }}>{this.state.fieldErrors.title}</span>

          <div className="input-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="product-price"
              value={this.state.fields.price}
              onChange={this.onInputChange}
            />
          </div>

          <span style={{ color: 'red' }}>{this.state.fieldErrors.price}</span>

          <div className="input-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="stock"
              id="product-quantity"
              value={this.state.fields.stock}
              onChange={this.onInputChange}
            />
          </div>

          <span style={{ color: 'red' }}>{this.state.fieldErrors.stock}</span>

          <div className="actions form-actions">
            <input
              type="submit"
              className="button"
              value={this.props.mode === 'add' ? 'Add' : 'Update'}
            />
            <a
              className="button"
              onClick={this.handleFormCancel}
            >Cancel</a>
          </div>
        </form>
      </div>
    )
  }
}

export default ProductForm;

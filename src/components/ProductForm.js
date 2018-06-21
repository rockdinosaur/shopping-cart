import React, { Component } from 'react';

class ProductForm extends React.Component {
  state = {
    fields: {
      title: '',
      price: '',
      quantity: '',
    },
    fieldErrors: {}
  }

  componentDidMount() {
    if (this.props.mode === 'edit') {
      this.setState({
        fields: {
          title: this.props.product.title,
          price: this.props.product.price,
          quantity: this.props.product.quantity
        }
      });
    }
  }

  handleFormCancel = () => {
    if (this.props.mode === 'edit') {
      this.props.onFormCancel();
    } else {
      this.setState(prevState => ({ fields: { title: '', price: '', quantity: '' } }));
    }
  }

  validate = (product) => {
    const errors = {};
    if (!product.title) { errors.title = 'Title required.'; }
    this.validateNumber('price', product.price, errors);
    this.validateNumber('quantity', product.quantity, errors);
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

    const productToAdd = {};
    productToAdd.title = this.state.fields.title;
    productToAdd.quantity = parseInt(this.state.fields.quantity);
    productToAdd.price = parseFloat(this.state.fields.price).toFixed(2);

    const fieldErrors = this.validate(productToAdd);
    this.setState({ fieldErrors: fieldErrors });
    if (Object.keys(fieldErrors).length) { return; }

    this.props.onAddProduct(productToAdd);
    this.setState(prevState => ({ fields: { title: '', price: '', quantity: '' } }));
  }

  onInputChange = (e) => {
    const fields = { ...this.state.fields };
    fields[e.target.name] = e.target.value;
    this.setState(prevState => ({ fields: fields }));
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
              name="quantity"
              id="product-quantity"
              value={this.state.fields.quantity}
              onChange={this.onInputChange}
            />
          </div>

          <span style={{ color: 'red' }}>{this.state.fieldErrors.quantity}</span>

          <div className="actions form-actions">
            <input
              type="submit"
              className="button"
              value="Add"
            />
            <a
              className="button"
              onClick={this.handleFormCancel}
              >
              Cancel
            </a>
          </div>
        </form>
      </div>
    )
  }
}

export default ProductForm;

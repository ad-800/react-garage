import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <div>
          <input className="form-control" {...input} placeholder={label} type={type}/>
          {touched && ((error && <span>{error}</span>))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>{this.props.garage}</h1>
        <Link to="/">Back</Link>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            placeholder="Aston Martin"
            component={this.renderField}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            placeholder="DB Mark III"
            component={this.renderField}
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            placeholder="James Bond"
            component={this.renderField}
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            placeholder="DB718HR"
            component={this.renderField}
          />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>Create Listing</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.brand || !values.plate || !values.model || !values.owner) {
    errors.required = "Required";
  }
  if (/[^A-Z0-9 ]/g.test(values.plate)) {
    errors.license = "Please enter valid plate (uppercase with numbers)";
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarForm', validate })(
  connect(mapStateToProps, { createCar })(CarsNew)
);

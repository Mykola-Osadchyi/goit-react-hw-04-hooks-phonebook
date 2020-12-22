import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.label}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              className={s.input}
            />
          </label>

          <label className={s.label}>
            Number
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              className={s.input}
            />
          </label>

          <button
            type="submit"
            disabled={!this.state.number}
            className={s.button}
          >
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  getContact: PropTypes.func.isRequired,
};

export default ContactForm;

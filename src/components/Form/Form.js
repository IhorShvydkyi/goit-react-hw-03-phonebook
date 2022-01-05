import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormStyled, Label, Input, AddButton } from "./Form.styled";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  inputNameId = uuidv4();
  inputNumberId = uuidv4();

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleAddContact = (e) => {
    e.preventDefault();

    const addedContact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(addedContact);
    this.resetContactForm();
  };
  resetContactForm = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    const { name, number } = this.state;

    return (
      <FormStyled onSubmit={this.handleAddContact}>
        <Label htmlFor={this.inputNameId}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            id={this.inputNameId}
            onChange={this.handleInputChange}
          />
        </Label>
        <Label htmlFor={this.inputNumberId}>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            id={this.inputNumberId}
            onChange={this.handleInputChange}
          />
        </Label>

        <AddButton type="submit">Add to contacts</AddButton>
      </FormStyled>
    );
  }
}

export default Form;

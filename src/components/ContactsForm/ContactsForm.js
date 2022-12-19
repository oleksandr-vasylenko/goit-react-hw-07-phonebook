import { Component } from 'react';
import {
  AddContactForm,
  InputField,
  AddContactButton,
} from './ContactsForm.Styled';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.items.find(item => item.name === e.target.elements.name.value)
      ? alert(`${e.target.elements.name.value} is already in contacts`)
      : this.props.onSubmit(
          e.target.elements.name.value,
          e.target.elements.number.value
        );
  };

  render() {
    return (
      <AddContactForm onSubmit={this.handleSubmit}>
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <AddContactButton>Add Contact</AddContactButton>
      </AddContactForm>
    );
  }
}

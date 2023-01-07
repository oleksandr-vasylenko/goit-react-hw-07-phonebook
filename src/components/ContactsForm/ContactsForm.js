import PropTypes from 'prop-types';
// import { useState } from 'react';
import {
  AddContactForm,
  InputField,
  AddContactButton,
} from './ContactsForm.Styled';

export const ContactsForm = ({ onSubmit, items }) => {
  const handleSubmit = e => {
    e.preventDefault();

    items.find(
      item =>
        item.name.toLocaleLowerCase() ===
          e.target.elements.name.value.toLocaleLowerCase() ||
        item.number === e.target.elements.number.value
    )
      ? alert(
          `${e.target.elements.name.value} or number is already in contacts`
        )
      : onSubmit(e.target.elements.name.value, e.target.elements.number.value);
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  return (
    <AddContactForm onSubmit={handleSubmit}>
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
};

ContactsForm.propTypes = {
  items: PropTypes.array,
  onSubmit: PropTypes.func,
};

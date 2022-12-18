import { Component } from 'react';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(
      e.target.elements.name.value,
      e.target.elements.number.value
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button>Add Contact</button>
      </form>
    );
  }
}

// export const ContactsForm = ({ onSubmit }) => {
//   // state = {
//   //   name: '',
//   //   number: '',
//   // };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit(e.target.elements.name.value, e.target.elements.number.value); // it is necessary to figure out, why I wasnt' abel to desctr. this
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />

//       <input
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />

//       <button>Add Contact</button>
//     </form>
//   );
// };

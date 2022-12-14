export const ContactsForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    // const { contactName } = event.target.elements.name;
    onSubmit(event.target.elements.name.value); // it is necessary to figure out, why I wasnt' abel to desctr. this
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button>Add</button>
    </form>
  );
};

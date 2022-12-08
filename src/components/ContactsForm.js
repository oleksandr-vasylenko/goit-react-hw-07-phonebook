export const ContactsForm = ({ onAdd }) => {
  const handleAdd = event => {
    event.preventDefault();
    const { name } = event.target.elements;
    onAdd(name.value);
  };

  return (
    <ContactsForm onSubmit={handleAdd}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <button>Add</button>
    </ContactsForm>
  );
};

import React from 'react';
import { useDispatch } from 'react-redux';
import { contactFilter } from '../../redux/filterSlice';
import { FilterThumb } from './Filter.Styled';

const ContactFilter = () => {
  const dispatch = useDispatch();

  return (
    <FilterThumb>
      <h2>Contacts</h2>
      <h3>Find contact by name</h3>
      <input
        onChange={e => dispatch(contactFilter(e.currentTarget.value))}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </FilterThumb>
  );
};

export default ContactFilter;

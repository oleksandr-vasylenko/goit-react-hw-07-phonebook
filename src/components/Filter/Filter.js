import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { FilterThumb } from './Filter.Styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function handleUpdate(e) {
    const query = e.target.value;
    dispatch(filterContacts(query));
  }

  return (
    <FilterThumb>
      <h3>Find contact by name</h3>
      <input value={filter} type="text" onChange={handleUpdate} />
    </FilterThumb>
  );
};

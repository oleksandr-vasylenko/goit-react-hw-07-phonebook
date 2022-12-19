import PropTypes from 'prop-types';

export const Filter = ({ onType, value }) => {
  return (
    <>
      <h3>Find contact by name</h3>
      <input type="text" onChange={onType} value={value} />
    </>
  );
};

Filter.propTypes = {
  onType: PropTypes.func,
  value: PropTypes.string,
};

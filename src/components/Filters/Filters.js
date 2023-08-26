import React from 'react';

const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <label>Filter contacts by name:</label>
      <input type="text" value={filter} onChange={onChange} />
    </div>
  );
};

export default Filter;

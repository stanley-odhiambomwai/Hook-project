import React from 'react';

const Filter = ({ setFilter }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: name === 'rating' ? Number(value) : value }));
  };

  return (
    <div>
      <input type="text" name="title" placeholder="Filter by title" onChange={handleChange} />
      <input type="number" name="rating" placeholder="Filter by rating" min="0" max="5" onChange={handleChange} />
    </div>
  );
};

export default Filter;

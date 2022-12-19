import React, { useState } from 'react';

const BookEdit = ({ book, onSave }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(book.id, title);
    // onSave();
  };

  return (
    <form onSubmit={handleSubmit} className='book-edit'>
      <label>TItle</label>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button is-primary'>Save</button>
    </form>
  );
};

export default BookEdit;

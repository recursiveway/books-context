import React, { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    // console.log(onDelete);
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  //trying

  const onSave = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  //

  if (showEdit) {
    content = <BookEdit book={book} onSave={onSave} />;
  }

  return (
    <div className='book-show'>
      <img
        alt='books'
        src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
      {content}
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;

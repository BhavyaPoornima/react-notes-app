import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import api from '../api'; // Ensure this path is correct

const Note = ({ id, text, date, handleDeleteNote, showDeleteButton }) => {
  const handleDeleteClick = async () => {
    try {
      await api.delete(`/notes/${id}`);
      handleDeleteNote(id);
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        {showDeleteButton && (
          <MdDeleteForever
            onClick={handleDeleteClick}
            className='delete-icon'
            size='1.3em'
          />
        )}
      </div>
    </div>
  );
};

export default Note;

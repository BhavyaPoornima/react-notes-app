import React, { useState, useEffect } from 'react';
import api from '../api';

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await api.get('/notes');
      setNotes(response.data);
    };
    fetchNotes();
  }, []);

  const addNote = async () => {
    await api.post('/notes', { title, content });
    setTitle('');
    setContent('');
    // Refresh notes list
    const response = await api.get('/notes');
    setNotes(response.data);
  };

  const deleteNote = async (id) => {
    await api.delete(`/notes/${id}`);
    // Refresh notes list
    const response = await api.get('/notes');
    setNotes(response.data);
  };

  return (
    <div>
      <h1>Notes</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Note;

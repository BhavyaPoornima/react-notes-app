import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Hi This is Bhavya!',
      date: '17/07/2024',
    },
    {
      id: nanoid(),
      text: 'This is my first node!',
      date: '18/07/2024',
    },
    {
      id: nanoid(),
      text: 'I am from KIET!',
      date: '19/07/2024',
    },
    {
      id: nanoid(),
      text: 'This is my new note!',
      date: '19/07/2024',
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  const handleLogin = () => {
    if (username === 'Bhavya' && password === 'poornima123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const addNote = (text) => {
    if (isLoggedIn) {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
      };
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    } else {
      alert('You must be logged in to add a note');
    }
  };

  const deleteNote = (id) => {
    if (isLoggedIn) {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    } else {
      alert('You must be logged in to delete a note');
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} handleLogout={handleLogout} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
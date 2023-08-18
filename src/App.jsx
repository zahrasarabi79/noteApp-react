import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    setNotes((prevNote) => [...prevNote, newNote]);
  };
  const handleDeleteNote = (id) => {
    // const filteredNote = notes.filter((n) => n.id !== id);
    // setNotes(filteredNote );
    // best way of filter notes
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };
  const handleCompelteTask = (e) => {
    const noteId = Number(e.target.value);
    // const newNote = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !completed } : note
    // );
    // setNotes(newNote);
    // best way of map on prevnotes
    setNotes((prevNote) =>
      prevNote.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };
  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            compelteTask={handleCompelteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

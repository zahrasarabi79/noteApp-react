import { useState } from "react";

const AddNewNote = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handeleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createsAt: new Date().toISOString(),
    };
    setTitle("");
    setDescription("");
    onAddNote(newNote);

    console.log(newNote);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="add-new-note">
      <h2>Add new note</h2>
      <form className="note-form" onSubmit={handeleSubmit}>
        <input
          value={title}
          onChange={handleChange}
          type="text"
          className="text-field"
          placeholder="Note title"
        />
        <input
          value={description}
          type="text"
          className="text-field"
          placeholder="Note detail ...."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
};

export default AddNewNote;

import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";

function NoteList({ notes, onDelete, compelteTask, sortBy }) {
  let sortedNotes = notes;
  if (sortBy === "latest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createsAt) - new Date(a.createsAt)
    );
  }
  if (sortBy === "earliest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createsAt) - new Date(b.createsAt)
    );
  }
  if (sortBy === "completed") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.completed) - new Date(b.completed)
    );
  }

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          compelteTask={compelteTask}
        />
      ))}
    </div>
  );
}

export default NoteList;

const NoteItem = ({ note, onDelete, compelteTask }) => {
  const option = { year: "numeric", month: "long", day: "numeric" };

  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>
            <TiDelete fontSize={28} color="red" />
          </button>
          <input
            type="checkbox"
            id={note.id}
            name={note.id}
            value={note.id}
            checked={note.completed} //ckecked box will be true or false base on value in note.completed(its default value is false)
            onChange={compelteTask}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createsAt).toLocaleDateString("en-uS", option)}
      </div>
    </div>
  );
};

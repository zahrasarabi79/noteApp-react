import React from "react";
import Message from "./Message";

function NoteStatus({ notes }) {
  // drived state: can be use from created state
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const unCompletedNotes = allNotes - completedNotes;
// message have children props (p tag is children props that added between open and close tag )
  if (!allNotes)
    return (
      <Message text={"no note has already been added"}>
        <p>done</p>
      </Message>
    );
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;

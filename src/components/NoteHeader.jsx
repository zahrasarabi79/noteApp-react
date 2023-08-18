import { useState } from "react";

function NoteHeader({ notes, sortBy, onSort }) {
  return (
    <div className="note-header">
      <h2>My Notes({notes.length}) </h2>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">latest note</option>
        <option value="earliest">earliest note</option>
        <option value="completed">completed note</option>
      </select>
    </div>
  );
}

export default NoteHeader;

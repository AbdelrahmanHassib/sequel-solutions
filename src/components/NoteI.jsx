import React from "react";
import { Link } from "react-router-dom";

const NoteI = ({ note }) => {
  return (
    <Link to={`/modify-note/${note.id}`} className="note">
      <h4>
        {note.title.length > 100
          ? note.title.substr(0, 100) + "..."
          : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteI;

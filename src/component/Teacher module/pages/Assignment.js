import React, { useState } from "react";
import "./Model.css";

const TeacherModule = () => {
  const [sessions, setSessions] = useState([]);
  const [sessionName, setSessionName] = useState("");

  const addSession = () => {
    if (sessionName.trim() === "") return;
    setSessions([...sessions, { id: Date.now(), name: sessionName }]);
    setSessionName("");
  };

  const deleteSession = (id) => {
    setSessions(sessions.filter((session) => session.id !== id));
  };

  return (
    <div className="teacher-module">
      <h2>Teacher Assignment Session</h2>
      <div className="session-input">
        <input
          type="text"
          placeholder="Enter session name"
          value={sessionName}
          onChange={(e) => setSessionName(e.target.value)}
        />
        <button onClick={addSession}>Add Session</button>
      </div>

      <ul className="session-list">
        {sessions.map((session) => (
          <li key={session.id} className="session-item">
            <span>{session.name}</span>
            <button className="delete-btn" onClick={() => deleteSession(session.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherModule;

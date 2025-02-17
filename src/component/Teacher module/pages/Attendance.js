import React, { useState } from "react";
import './att.css';
const TeacherAttendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", roll: "101", attendance: "Present" },
    { id: 2, name: "Jane Smith", roll: "102", attendance: "Absent" },
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", roll: "" });

  // Function to add a new student
  const addStudent = () => {
    if (newStudent.name.trim() === "" || newStudent.roll.trim() === "") {
      alert("Please enter both name and roll number.");
      return;
    }

    setStudents((prevStudents) => [
      ...prevStudents,
      { id: prevStudents.length + 1, ...newStudent, attendance: "Present" },
    ]);

    setNewStudent({ name: "", roll: "" }); // Reset input fields
  };

  // Function to update attendance
  const handleAttendanceChange = (id, value) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, attendance: value } : student
      )
    );
  };

  return (
    <div>
      <h2>Teacher Attendance Module</h2>

      {/* Add New Student Section */}
      <div>
        <input
          type="text"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Roll Number"
          value={newStudent.roll}
          onChange={(e) => setNewStudent({ ...newStudent, roll: e.target.value })}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      {/* Attendance Table */}
      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>
                <select
                  value={student.attendance}
                  onChange={(e) => handleAttendanceChange(student.id, e.target.value)}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Leave">Leave</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherAttendance
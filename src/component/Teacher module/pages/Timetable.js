import React, { useState } from "react";
import "./att.css";

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

  // Weekly timetable
  const timetable = [
    { day: "Monday", subject: "Java", time: "9:00 AM - 10:30 AM" },
    { day: "Tuesday", subject: "DSA", time: "10:00 AM - 11:30 AM" },
    { day: "Wednesday", subject: "SYSTEM DESIGN", time: "11:00 AM - 12:30 PM" },
    { day: "Thursday", subject: "MACHINE LEARNING", time: "12:00 PM - 1:30 PM" },
    { day: "Friday", subject: "OOPS", time: "1:00 PM - 2:30 PM" },
  ];

  return (
    <div className="container">
      <h2>Teacher Attendance Module</h2>

      {/* Add New Student Section */}
      <div className="add-student">
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
      <h3>Attendance List</h3>
      <table>
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

      {/* Timetable Section */}
      <h3>Weekly Timetable</h3>
      <table className="timetable">
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((entry, index) => (
            <tr key={index}>
              <td>{entry.day}</td>
              <td>{entry.subject}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherAttendance;

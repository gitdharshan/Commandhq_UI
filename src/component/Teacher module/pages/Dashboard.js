import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", roll: "101", attendance: "Present" ,subject:"Java"},
    { id: 2, name: "Jane Smith", roll: "102", attendance: "Absent" ,subject:"Java"},
    { id: 3, name: "Mike Johnson", roll: "103", attendance: "Leave",subject:"Java" },
  ]);

  const totalStudents = students.length;
  const presentCount = students.filter((s) => s.attendance === "Present").length;
  const absentCount = students.filter((s) => s.attendance === "Absent").length;
  const leaveCount = students.filter((s) => s.attendance === "Leave").length;

  // 🔹 Update Attendance Dynamically
  const handleAttendanceChange = (id, newAttendance) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, attendance: newAttendance } : student
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Teacher Dashboard</h2>

      {/* 📊 Summary Statistics */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div style={{ padding: "10px", background: "#28a745", color: "#fff" }}>
          Total Students: {totalStudents}
        </div>
        <div style={{ padding: "10px", background: "#17a2b8", color: "#fff" }}>
          Present: {presentCount}
        </div>
        <div style={{ padding: "10px", background: "#dc3545", color: "#fff" }}>
          Absent: {absentCount}
        </div>
        <div style={{ padding: "10px", background: "#ffc107", color: "#000" }}>
          On Leave: {leaveCount}
        </div>
      </div>

      {/* 📜 Recent Attendance */}
      <h3>Recent Attendance</h3>
      <table border="1" width="100%" style={{ marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Attendance</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>
                {/* 🔹 Editable Attendance Dropdown */}
                <select
                  value={student.attendance}
                  onChange={(e) => handleAttendanceChange(student.id, e.target.value)}
                >
          
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Leave">Leave</option>
                </select>
              </td>
              <td>{student.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔗 Navigation Buttons */}
      <Link to="/attendance">
        <button>Go to Attendance</button>
      </Link>
    </div>
  );
};

export default Dashboard;

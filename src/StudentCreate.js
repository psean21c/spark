import { useState } from "react";

const StudentCreate = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [staff, setStaff] = useState('cindy');

  const handleSubmit = (e) => {
    e.preventDefault(); // refresh the page after submit
    const student = { firstName, lastName, staff };

    // console.log(blog);
    fetch('/add/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }).then(() => {
      console.log('new student added');
    })    
  }

  return (
    <div className="create">
      <h2>Add a new Student</h2>
      <form  onSubmit={handleSubmit}>
        <label>firstName:</label>
        <input 
          type="text" 
          required 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>lastName:</label>
        <input 
          type="text" 
          required 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>register Staff:</label>
        <select
          value={staff}
          onChange={(e) => setStaff(e.target.value)}
        >
          <option value="cindy">cindy</option>
          <option value="eugine">eugine</option>
        </select>
        <button>Add Student</button>
        <p>{firstName}</p>
      </form>
    </div>
  );
}
 
export default StudentCreate;
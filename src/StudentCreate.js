import { useState } from "react";

const StudentCreate = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('yoshi');

  const handleSubmit = (e) => {
    e.preventDefault(); // refresh the page after submit
    const blog = { title, body, author };

    // console.log(blog);
    fetch('/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })    
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form  onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
        <p>{author}</p>
        <p>{title}</p>
        <p>{body}</p>
      </form>
    </div>
  );
}
 
export default StudentCreate;
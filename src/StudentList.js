import {Link} from 'react-router-dom';

const StudentList = ({students, title, handleDelete}) => {

    return ( 
        <div className="student-list">
            <h2>{title}</h2>
            {students.map((blog)=> (
                <div className="student-preview" key={blog._id}>
                    <Link to={`/student/${blog._id}`}>
                        <h2> {blog.firstName} {blog.lastName}</h2>
                        <p>Written by {blog.staff}</p>
                    </Link>
                </div>
            ))}

        </div>
     );
}
 
export default StudentList;
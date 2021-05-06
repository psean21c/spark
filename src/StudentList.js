import {Link} from 'react-router-dom';

const StudentList = ({blogs, title, handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog._id}>
                    <Link to={`/blogs/${blog._id}`}>
                        <h2> {blog.firstName} {blog.lastName}</h2>
                        <p>Written by {blog.staff}</p>
                    </Link>
                </div>
            ))}

        </div>
     );
}
 
export default StudentList;
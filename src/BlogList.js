/**
    Below are the same way to pass properties
    1) only pass "props" and distribute
    (props) => {}
    const blogs = props.blogs;
    const title = props.title;
    console.log(props,blogs)
    2) pass seperate variables
    ({blogs, title, handleDelete})
*/
const BlogList = ({blogs, title, handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}

        </div>
     );
}
 
export default BlogList;
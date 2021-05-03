
const BlogList = ({blogs, title, handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog._id}>
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
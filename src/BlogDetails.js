import {useParams} from 'react-router-dom';
// import useFetch from './useFetch';
// not working below because I didn't make get for ID


const BlogDetails = () => {
    const {id} = useParams();
    // const url = "./students/"
    // const {data: blog, isPending, error} = useFetch(url + id);

    return ( 
        <div className="blog-details">
            {/* {isPending && <div>Loading ... </div>}
            {error && <div> {error}</div>}
            {blog && (
                <article>
                    <h2> {blog.title}</h2>
                    <p>witten by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )} */}
            {id}
        </div>
     );
}
 
export default BlogDetails;
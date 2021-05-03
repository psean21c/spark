import {useState, useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {

    // useState()
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // useEffect()
    useEffect(() => {
        setTimeout(() => {
            fetch('/students')
            .then(res => {
                if (!res.ok) {
                    throw Error('Not able to fetch data from server');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            });    
        },1000);
    },[])

    // this method will be called from ./BolgList
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="Connected Blogs !!" handleDelete ={handleDelete}/>}
        </div>
     );
}
 
export default Home;
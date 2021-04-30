import {useState, useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {

    // useState()
    const [blogs, setBlogs] = useState([
        {title:'started', body: 'committment', author: 'spark', id: 1},
        {title:'decided', body: 'Lets do it again', author: 'cindy', id: 2},
        {title:'hesitated', body: 'still in limbo', author: 'david', id: 3}
    ])

    const [name, setName] = useState('spark');

    // useEffect()
    useEffect(() => {
        console.log('useEffect');

    },[name])

    // this method will be called from ./BolgList
    const handleDelete = (id) => {
        // console.log('handleDelete')
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="Connected Blogs !!" handleDelete ={handleDelete}/>
            <BlogList blogs={blogs.filter( (blog) => blog.author === 'cindy')} title="Cindy's Blogs !!"/>
            <button onClick={() => setName('hero')}>name change</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;
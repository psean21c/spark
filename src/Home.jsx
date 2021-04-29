import {useState} from 'react';

import BlogList from './BlogList';
const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:'started', body: 'committment', author: 'spark', id: 1},
        {title:'decided', body: 'Lets do it again', author: 'cindy', id: 2},
        {title:'hesitated', body: 'still in limbo', author: 'david', id: 3}
    ])
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="Connected Blogs !!"/>
        </div>
     );
}
 
export default Home;
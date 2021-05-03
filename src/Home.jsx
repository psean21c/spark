import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const url = "./students"
    const {data: blogs,isPending, error} = useFetch(url);


    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="Connected Blogs !!"/>}
        </div>
     );
}
 
export default Home;
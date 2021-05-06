import StudentList from './StudentList';
import useFetch from './useFetch';

const StudentHome = () => {
    const url = "./students"
    const {data: blogs,isPending, error} = useFetch(url);

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <StudentList blogs={blogs} title="Connected Students !!"/>}
        </div>
     );
}
 
export default StudentHome;
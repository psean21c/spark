import StudentList from './StudentList';
import useFetch from './useFetch';

const StudentHome = () => {
    const url = "./students"
    const {data: students,isPending, error} = useFetch(url);

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {students && <StudentList students={students} title="Connected Students !!"/>}
        </div>
     );
}
 
export default StudentHome;
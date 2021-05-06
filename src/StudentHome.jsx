import StudentList from './StudentList';
import useFetch from './useFetch';

const StudentHome = () => {
    const url = "https://2iwofld0wf.execute-api.us-east-1.amazonaws.com/devStage/readStudents"
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
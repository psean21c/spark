import {Link} from 'react-router-dom';

const StudentList = ({students, title}) => {

    return ( 
        <div className="student-list">
            <h2>{title}</h2>
            {students.map((student)=> (
                <div className="student-preview" key={student.id}>
                    {/* {console.log("debug:", student.id)} */}
                    <Link to={`/student/${student.id}`}>
                        <h2> {student.firstName} {student.lastName}</h2>
                        <p>Written by {student.staff}</p>
                    </Link>
                </div>
            ))}

        </div>
     );
}
 
export default StudentList;
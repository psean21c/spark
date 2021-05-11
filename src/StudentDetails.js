import { useHistory, useParams } from "react-router-dom";
// import useFetch from "./useFetch";
import {useState} from 'react';


const StudentDetails = () => {
    const { id } = useParams();
    const url = "https://k3rx4dln3m.execute-api.us-east-1.amazonaws.com/version2/student/";
    const history = useHistory();

        // useState
    const [student, setStudent] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    fetch(url + id)
    .then(res => {
        const result = res.json()
        if (!res.ok) {
            throw Error('Not able to fetch student from server');
        }
        return result;
    })
    .then(student => {
        setStudent(student);
        setIsPending(false);
        setError(null);
    })
    .catch(err => {
        console.log("err", err)
    });   
 
    const handleClick = () => {
        fetch(url + student.id, {
           method: 'DELETE'
        }).then(() => {
            console.log(student + 'deleted');
            history.push('/');
        }) 
    }

  return (
    <div className="student-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { student && (
        <article>
          <h2>{ student.firstName } { student.lastName }</h2>
          <p>Written by { student.staff }</p>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>

  );
}
 
export default StudentDetails;
import {useState} from 'react';

const Home = () => {

    const title = "Home Land !! Welcome to React again"

    // const name = 'simon';
    const [name, setName] = useState('simon');
    const [age,setAge] = useState(25);

    const handleClick0 = () => {
        console.log("clicked 0")
    }
    const handleClick1 = (name) => {
        setName(name)
        console.log("clicked .. !!", name)
    }
    return ( 
        <div className="home">
        <h3>{title}</h3>
        <p> {name} is {age} years old</p>
        <button onClick={handleClick0}> Click me</button>
        <button onClick={(e) =>
                handleClick1('david',e)
        }> Click me again</button>
        </div>
     );
}
 
export default Home;
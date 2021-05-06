import axios from 'axios';
import React from 'react';


class Student extends React.Component{

    state = {
        title: '',
        body: ''
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
        
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
            title: this.state.title,
            body: this.state.body
        };

        axios({
            url: '/add',
            method:'POST',
            data: payload
        })
        .then((res)=>{
            // console.log('Data sent to server: ', payload);
            console.log('respose from server:', res.data)
        })
        .catch((error)=>{
            console.log('Internal Server error:', error);
        });
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-input">
                        <input
                            type="text"
                            name="title"
                            placeholder="enter Title here"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-input">
                        <textarea 
                        placeholder="enter body here"
                        name="body" 
                        cols="30" 
                        rows="10"
                        value={this.state.body}
                        onChange={this.handleChange}
                        >
                        </textarea>
                    </div>
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default Student;

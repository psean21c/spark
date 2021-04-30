import axios from 'axios';
import React from 'react';


class Blog extends React.Component{

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
        console.log('handleSubmit')
        event.preventDefault();
        const payload = {
            title: this.state.title,
            body: this.state.body
        };

        // 1) axios.post('/add', payload).then().catch()
        // 2) axios({url:"",method:"POST,data:payload"}).then().catch()
        axios({
            url: '/add',
            method:'POST',
            data: payload
        })
        .then((res)=>{
            console.log('Data sent to server: ', payload);
            console.log('respose from server:', res.data)
        })
        .catch((error)=>{
            console.log('Internal Server error:', error);
        });
    }


    render() {
        console.log('state:', this.state)
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

export default Blog;

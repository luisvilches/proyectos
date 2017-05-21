import React from 'react';

class Users extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/all')
        .then(res => res.json())
        .then(data => {
            this.setState({
                users: data.data
            })
        })
    }

    render(){
        return(
            <div>
                {this.state.users.map((item,index) => {
                    return(
                        <div key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.mail}</p>
                            <p>{item.pass}</p>
                            <br/> 
                            <br/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users;
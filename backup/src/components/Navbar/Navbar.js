import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router'
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import './Navbar.css';


class App extends Component {

    constructor(){
        super();

        this.state = {
            category: []
        }
    }


    componentDidMount(){
        fetch('http://localhost:4000/category')
        .then(res => {
            return res.json()
        })
        .then(response => {
            if(response.status === 'error'){
                alert(response.message);
            } 
            else {
                this.setState({
                    category: response.data
                })
            }
        })
    }

    
    render() {
        return (

        <Navbar inverse collapseOnSelect fixedTop={true} className="navb">
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">LOGO_VIDEOMANIAS</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    {this.state.category.map((item,index) => {
                            return(
                                    <Link to={item.name} key={index} className="link">{item.name}</Link>
                            )
                        })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default App;

import React,{Component} from 'react'
import {Navbar,Nav,NavItem} from 'react-bootstrap'


class NavBar extends Component {
    constructor(props) {
        super(props);

    }
    
    render(){
        return (
            <Navbar  collapseOnSelect fixedTop={true}>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#" className="logo">MemeGram</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
            );
    }
}

export default NavBar;
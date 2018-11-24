import React, {Component} from 'react';
import { Navbar, NavItem } from 'react-bootstrap';

export default class Navigation extends Component {
    render(){
        return(
            <Navbar>
                    <nav id="nav">
                        <ul className="container">
                        <NavItem href="#top"> Top</NavItem>
                            <NavItem href="#work">Work</NavItem>
                            <NavItem a href="#portfolio">Portfolio</NavItem>
                            <NavItem a href="#contact">Foundation</NavItem>
                        </ul>
                    </nav>
            </Navbar>
        )
    }
}
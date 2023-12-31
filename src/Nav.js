import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class Nav extends Component {
    render() {
        const links = this.props.dogs.map(dog => (
            <NavLink key={dog.name} to={`/dogs/${dog.name}`} >{dog.name}</NavLink>
        ));
        return (
            <nav>
                <NavLink exact to="/dogs">Home</NavLink>
                {links}
            </nav>
        );
    }
}

export default Nav;
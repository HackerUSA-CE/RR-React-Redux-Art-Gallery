import React from 'react'
import NavLink from './NavLink'

const Nav = () => {

    return (
        <div className="Nav" style={{'backgroundColor': 'white'}}>
            <NavLink content="Blog" />
            <NavLink content="About Me" />
            <NavLink content="Projects" />
            <NavLink content="Other" />
        </div>
    )
}

export default Nav
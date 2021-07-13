import React from 'react'

const NavLink = (props) => {

    return (
        <div className="NavLink" style={{'backgroundColor': 'white'}}>
            <p>{props.content}</p>
        </div>
    )
}

export default NavLink
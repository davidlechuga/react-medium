import React from 'react'

function NavbarNavItem (props){
    
        const style = ['nav-item']
        if(props.active) style.push('active')
        if (props.active) style.push('dropdown')
        // let className = `nav-item ${props.active ? 'active' : ''}`
        // className= `${className} ${props.dropdown ? 'dropdown' : ''}`

        
        return (
        <li className="nav-item active">
            {props.children}
        </li>
    )
}

export default NavbarNavItem
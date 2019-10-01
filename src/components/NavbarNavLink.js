import React from 'react'

function NavbarNavLink (props) {

    const {
        to,
        dropdownToggle,
        text,
        label,
        ...cleanProps
    } = props

    const styles = ['nav-link']
    if (props.dropdownToggle) styles.push('dropdown-toggle')

    const className = styles.join(' ')


return(

    <a
        className={className}
        href={to}
        {...cleanProps}
    >
        {props.text}
    <span className="sr-only">
        
        {label}
    </span>
    </a>
)
}

export default NavbarNavLink
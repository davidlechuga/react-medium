import React from 'react'

<<<<<<< HEAD
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
=======
function NavbarNavLink(props) {
  const {
    to,
    dropdownToggle,
    text,
    label,
    disabled,
    onClick,
    ...cleanProps
  } = props

  const styles = ['nav-link']

  if (dropdownToggle) styles.push('dropdown-toggle')
  if (disabled) styles.push('disabled')

  const className = styles.join(' ')

  return (
    <a
      className={className}
      href={to}
      {...cleanProps}
      onClick={onClick}
    >
      { text }
      <span className="sr-only">
        { label }
      </span>
    </a>
  )
}

export default NavbarNavLink
>>>>>>> 8cf5c7faa82f2e49094cdd552af5c9f7726e43f5

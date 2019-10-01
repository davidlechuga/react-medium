<<<<<<< HEAD
import React from 'react';

function DropdownMenu (props) {
    return (
        <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >

                {props.children}
            </div>
    )
}

export default DropdownMenu
=======
import React from 'react'

function DropdownMenu(props) {
  const styles = ['dropdown-menu']

  if (props.active) styles.push('show')

  const className = styles.join(' ')

  return (
    <div
      className={className}
      aria-labelledby={props.ariaLabelledBy}
    >
      { props.children }
    </div>
  )
}

export default DropdownMenu
>>>>>>> 8cf5c7faa82f2e49094cdd552af5c9f7726e43f5

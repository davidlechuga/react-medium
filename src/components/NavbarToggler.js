import React from 'react'

<<<<<<< HEAD
function NabarToggler () {
    return(
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target={props.}
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    )
}
=======
function NavbarToggler(props) {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      aria-expanded="false"
      data-target={props.dataTarget}
      aria-controls={props.ariaControls}
      aria-label={props.ariaLabel}
    >
      <span className="navbar-toggler-icon" />
    </button>
  )
}

export default NavbarToggler
>>>>>>> 8cf5c7faa82f2e49094cdd552af5c9f7726e43f5

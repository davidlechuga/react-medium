import React from 'react'

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
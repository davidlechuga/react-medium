import React, { Component } from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarCollapse from './NavbarCollapse'
import NavbarToggler from './NavbarToggler'
<<<<<<< HEAD

import NavbarNav from './NavbarNav'
import NavbarNavItem from './NavbarNavItem'
import NavbarNavLink from './NavbarNavLink'

import DropdownMenu from './DropdownMenu'
import DropdownMenuItem from './DropdownMenuItem'

=======
>>>>>>> 8cf5c7faa82f2e49094cdd552af5c9f7726e43f5

import NavbarNav from './NavbarNav'
import NavbarNavItem from './NavbarNavItem'
import NavbarNavLink from './NavbarNavLink'

<<<<<<< HEAD
      <NavbarCollapse>
        <NavbarNav>
          <NavbarNavItem active>
            <a
              className="nav-link"
              href="/"
            >
              Home
              <span className="sr-only">(current)</span>
            </a>
            </NavbarNavItem>
            <NavbarNavItem >
              <NavbarNavLink
                to="/home"
                text="HOME"
                label="go to home page (current)"

              />
            </NavbarNavItem>
            <NavbarNavItem dropdown>
            <NavbarNavLink
                id= "navbarDropdown"
=======
import DropdownMenu from './DropdownMenu'
import DropdownMenuItem from './DropdownMenuItem'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  toggleDropdownActive() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavbarBrand />

        <NavbarToggler
          dataTarget="navbar"
          ariaControls="#navbar"
          ariaLabel="navbar"
        />

        <NavbarCollapse id="navbar">
          <NavbarNav>
            <NavbarNavItem active>
              <NavbarNavLink
                to="/home"
                text="Home"
                label="go to home page (current)"
              />
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLink
                to="/link"
                text="Link"
                label="go to link page"
              />
            </NavbarNavItem>
            <NavbarNavItem dropdown>
              <NavbarNavLink
                id="navbarDropdown"
>>>>>>> 8cf5c7faa82f2e49094cdd552af5c9f7726e43f5
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                text="Dropdown"
                dropdownToggle
<<<<<<< HEAD
            />
            <DropdownMenu arialLabelledBy="dropdownmenu">
              <DropdownMenuItem
                to = "/"
                arialLabelledBy="menuitem"

              />
               
              <a
                className="dropdown-item"
                href="/"
              >
                Another action
              </a>
              <div className="dropdown-divider"/>
              <a
                className="dropdown-item"
                href="/"
              >
                Something else here
              </a>
              </DropdownMenu>
          </NavbarNavItem>
          <NavbarNavItem >
            <a
              className="nav-link disabled"
              href="/"
              tabindex="-1" aria-disabled="true"
            >
              Disabled
            </a>
           </NavbarNavItem>
         </NavbarNav>
        <form
          className="form-inline my-2 my-lg-0"
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
=======
                onClick={this.toggleDropdownActive.bind(this)}
              />
              <DropdownMenu
                ariaLabelledBy="dropdownmenu"
                active={this.state.active}
              >
                <DropdownMenuItem
                  to="/action"
                  text="action"
                />

                <DropdownMenuItem
                  to="/another-action"
                  text="Another action"
                />

                <div className="dropdown-divider"/>

                <DropdownMenuItem
                  to="/something-else-here"
                  text="Something else here"
                />
              </DropdownMenu>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLink
                className="nav-link disabled"
                to="/disabled"
                tabIndex="-1"
                aria-disabled="true"
                text="Disabled"
              />
            </NavbarNavItem>
          </NavbarNav>

          <form
            className="form-inline my-2 my-lg-0"
>>>>>>> 8cf5c7faa82f2e49094cdd552af5c9f7726e43f5
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </NavbarCollapse>
      </nav>
    )
  }
}

export default Navbar

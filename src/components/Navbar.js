import React from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarCollapse from './NavbarCollapse'
import NavbarToggler from './NavbarToggler'

import NavbarNav from './NavbarNav'
import NavbarNavItem from './NavbarNavItem'
import NavbarNavLink from './NavbarNavLink'

import DropdownMenu from './DropdownMenu'
import DropdownMenuItem from './DropdownMenuItem'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavbarBrand />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

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
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                text="Dropdown"
                dropdownToggle
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
          >
            Search
          </button>
        </form>
      </NavbarCollapse>
    </nav>
  )
}

export default Navbar

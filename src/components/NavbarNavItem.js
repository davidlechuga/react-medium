import React from 'react'

<<<<<<< HEAD
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
=======
function NavbarNavItem(props) {
  const styles = ['nav-item']

  if (props.active) styles.push('active')
  if (props.dropdown) styles.push('dropdown')

  const className = styles.join(' ')

  return (
    <li className={className}>
      { props.children }
    </li>
  )
}

export default NavbarNavItem
>>>>>>> 8cf5c7faa82f2e49094cdd552af5c9f7726e43f5

import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  const nav = [
    { to: '/', name: 'Home' },
    { to: '/About', name: 'About' },
    { to: '/Contact', name: 'Contact' },
  ]
  const navlink = nav.map((item, index) => {
    return (
      <NavLink key={index} activeStyle={{ color: '#078' }} to={item.to} exact>
        {item.name}
      </NavLink>
    )
  })
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <h1 style={{ color: '#0af' }}>ToDo List</h1>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar mr-auto ">
          {navlink}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

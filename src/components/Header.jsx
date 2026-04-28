import { NavLink } from 'react-router-dom'

const tabClass = ({ isActive }) => `tab ${isActive ? 'active' : ''}`

export default function Header() {
  return (
    <nav>
      <div className="nav-inner">
        <NavLink to="/" className="logo">
          Lee kanghun<span className="dot">.</span>
        </NavLink>

        <div className="tabs">
          <NavLink to="/about" className={tabClass}>About</NavLink>
          <NavLink to="/career" className={tabClass}>Career</NavLink>
          <NavLink to="/projects" className={tabClass}>Projects</NavLink>
          <NavLink to="/education" className={tabClass}>Education</NavLink>
        </div>

        <a className="nav-cta" href="mailto:Chinggu88@gmail.com">
          Get in touch →
        </a>
      </div>
    </nav>
  )
}

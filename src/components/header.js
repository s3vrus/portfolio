import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  return(
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo" activeClassName="active-link">
            COLLIN
          </Link>
        <div className="nav-links show-links">
          <Link to="/about" className="nav-link" activeClassName="active-link">
            About
          </Link>
          <Link to="/work" className="nav-link" activeClassName="active-link">
            Work
          </Link>
          <Link to="/contact" className="nav-link" activeClassName="active-link">
            Contact
          </Link>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

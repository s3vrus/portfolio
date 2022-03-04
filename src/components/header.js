import * as React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss';

const Header = () => {

  const [isOpen, setOpen] = React.useState(false);

  return(
    <nav className="navbar">
      <div className="wrapper">
        <div className="nav-header">
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
        <div className="nav-links show-links">
          <Link to="/about" className="nav-link" activeClassName="active-link">
            About
          </Link>
          <Link to="" className="nav-link disable" activeClassName="active-link">
            Work
            {/* <span className="label">Soon</span> */}
          </Link>
          <a href="mailto:hello@collinosborne.dev" className="nav-link">
            Contact
          </a>
        </div>

        <div onClick={() => setOpen(!isOpen)} className={`hamburger-menu ${isOpen ? "open" : "close"}`}>
          Menu
          <div className={`panel ${isOpen ? "open" : "close"}`}>
            <Link to="/about" className="panel-text">
              About
            </Link>
            <Link to="" className="disable panel-text">
              Work
            </Link>
            <a href="mailto:hello@collinosborne.dev" className="panel-text">
              Contact
            </a>
          </div>
        </div>

        </div>
      </div>
    </nav>
  )
}

export default Header

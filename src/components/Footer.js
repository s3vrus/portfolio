import React from "react"
import '../styles/styles.scss';

const Footer = () => {
  return(
    <div className="wrapper">
      <footer className="page-footer">
        <div className="footer-left">
          <p>
              Based in
          </p>
          <p>
              Highlands Ranch, CO
          </p>
        </div>

        <div className="footer-right">
          <p>
              Portfolio {new Date().getFullYear()}
          </p>
          <p>
              Designed and developed by me
          </p>
        </div>
      </footer>   
    </div> 
  )
}

export default Footer
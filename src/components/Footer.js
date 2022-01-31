import React from "react"

const Footer = () => {
  return(
    <div className="wrapper">
      <footer className="page-footer">
          <p>
              Portfolio {new Date().getFullYear()}
          </p>
          <p>
              Designed and developed by me using:
          </p>
      </footer>   
    </div> 
  )
}

export default Footer
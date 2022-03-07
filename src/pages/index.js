import * as React from "react"
import '../styles/styles.scss'
import Typewriter from 'typewriter-effect'
import Layout from '../components/layout'
import gow from '../images/gow.png'
import ikuza from '../images/ikuza-mint.png'
import nftcentral from '../images/nftcentral.png'
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const IndexPage = () => (

  <Layout>
    <motion.div className="transition-main" initial="hidden" animate="visible" variants={variants}>
      <div className="hero">
        <div className="wrapper">
          <h2 className="index-name">Collin Osborne</h2>
          <h1 className="index-large-heading">Web Developer</h1>
          <div className="index-medium-heading">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("UI-UX Designer")
                  .pauseFor(2000)
                  .deleteAll()
                  // .typeString("Data Analyst")
                  // .pauseFor(2000)
                  // .deleteAll()
                  .typeString("Blockchain Enthusiast")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("UI-UX Designer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Blockchain Enthusiast")
                  
                  .start();
              }}
            />
          </div>
        </div>
      </div>
    


      <div className="quick-bar">
        <div className="wrapper">
          <div className="quick-info">
            <div className="quick-link">
              Recent Accomplishments:
              <p className="quick-text">Completed 30DaysOfJavaScript</p>
              <p className="quick-text">Graduating from IUPUI</p>
              <p className="quick-text">Taught Molly to roll over</p>
            </div>
            <div className="quick-link">
              Currently At:
              <p className="quick-text">Neidhammer</p>
            </div>
            <div className="quick-link">
              Links:
              <div>
                <a className="quick-text" href="https://github.com/s3vrus" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div>
                <a className="quick-text" href="https://twitter.com/svrus3" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
              <div>
                <a className="quick-text" href="https://www.linkedin.com/in/collinOsborneDev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>


    <section id="work">
      <div className="wrapper">
        <h2 className="index-small-heading">Featured</h2>
        <h2 className="index-small-heading">Projects</h2>

        <div className="featured-projects">
          <a href="/ikuza">
            <div>
              <img src={ikuza} className="img-container" alt="Ikuza"></img>
            </div>
          </a>
          <div className="featured-container">
            <h2 className="index-small-heading">IKUZA</h2>
            <div className="small-space"></div>
            <p>An NFT collection site inspired by the popular collection, Azuki.
               Fully responsive with a clean and minimal design.
            </p>
            <div className="small-space"></div>
            <a className="proj-link" href="/ikuza">Preview Project</a>
          </div>
        </div>

        <div className="featured-projects">
          <a href="/nftcentral">
            <div>
              <img src={nftcentral} className="img-container" alt="NFT Central"></img>
            </div>
          </a>
          <div className="featured-container">
            <h2 className="index-small-heading">NFT Central</h2>
            <div className="small-space"></div>
            <p>Website that uses multiple API's to gather data about cryptocurrencies
              and NFTs. Allows users to log in using MetaMask to have access to a 
              profile page.
            </p>
            <div className="small-space"></div>
            <a className="proj-link" href="/nftcentral">Preview Project</a>
          </div>
        </div>

        <div className="featured-projects">
          <a href="/gow">
            <div>
              <img src={gow} className="img-container" alt="God of War"></img>
            </div>
          </a>
          <div className="featured-container">
            <h2 className="index-small-heading">God of War</h2>
            <div className="small-space"></div>
            <p>Designed and developed a tribute site to the God of War (PS4) game.
              Built using Gatsby and uses GraphQL to handle background images.
            </p>
            <div className="small-space"></div>
            <a className="proj-link" href="/gow">Preview Project</a>
          </div>
        </div>

      </div>
    </section>



    {/* <section id="about">
      <div className="wrapper">

      </div>
    </section> */}



    <section id="contact">
      <div className="wrapper">

        <h2 className="index-small-heading2">Get in touch</h2>

        <div className="email-box">
          <a className="index-thin-heading" href = "mailto:hello@collinosborne.dev">hello@collinosborne.dev</a>
        </div>  
        
        <div className="spacer"></div>

      </div>
    </section>
  </Layout>
)

export default IndexPage

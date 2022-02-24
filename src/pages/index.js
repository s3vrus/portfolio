import * as React from "react"
import '../styles/styles.scss'
import Typewriter from 'typewriter-effect'
import Layout from '../components/layout'
import gow from '../images/gow.jpg'
import priv from '../images/priv.png'
import nft from '../images/nft-connected.png'
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
              <p className="quick-text">Graduated from IUPUI</p>
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
                <a className="quick-text" href="https://linkedin.com/in/collin-o-0a010521b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
          <a href="/gow">
            <div>
              <img src={gow} className="img-container" alt="God of War"></img>
            </div>
          </a>
          <div className="featured-container">
            <h2 className="index-small-heading">God of War</h2>
            <div className="small-space"></div>
            <p>Designed and developed a tribute site to the God of War (PS4) game.
              Started the project as a way to catch myself up on things I felt school
              wasn't teaching me.
            </p>
            <div className="small-space"></div>
            <a className="proj-link" href="/gow">Preview Project</a>
          </div>
        </div>

        <div className="featured-projects">
          <a href="/privacycoins">
            <div>
              <img src={priv} className="img-container" alt="Privacy Coins"></img>
            </div>
          </a>
          <div className="featured-container">
            <h2 className="index-small-heading">Privacy Coins</h2>
            <div className="small-space"></div>
            <p>Webpage that uses CoinGecko API to list prices and data for privacy based
              cryptocurrencies.
            </p>
            <div className="small-space"></div>
            <a className="proj-link" href="/privacycoins">Preview Project</a>
          </div>
        </div>

        <div className="featured-projects">
          <a href="/nftinfo">
            <div>
              <img src={nft} className="img-container" alt="NFT Info"></img>
            </div>
          </a>
          <div className="featured-container">
            <h2 className="index-small-heading">NFT Info</h2>
            <p>A simple web app that allows a user to connect their MetaMask and then it uses the 
              OpenSea API to get information on all of the NFT collections in the users wallet.
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

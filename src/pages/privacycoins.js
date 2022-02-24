import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import priv from '../images/priv.png'
import privcoins from '../images/priv-coin.png'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Priv = () => (
    <Layout>
        <motion.div className="transition-main" initial="hidden" animate="visible" variants={variants}>
            <div className="wrapper">
                <div className="projects-large-container">
                    <div>
                        <img src={priv} className="projects-main-img" alt="Privacy Coins"></img>
                    </div>

                    <h1 className="projects-header">
                        Privacy Coins
                    </h1>
                </div>

                <div className="projects-details">
                    <div  className="details-left">
                        <p>
                            Live Site
                        </p>
                        <a className="projects-link" href="https://privacy-coins.netlify.app/" target="_blank" rel="noopener noreferrer">https://privacy-coins.netlify.app/</a>
                    </div>
                    <div  className="details-right">
                        <p>
                            Project Date
                        </p>
                        <p>
                            Feb 2022
                        </p>
                    </div>
                </div>


                <div className="projects-breakdown">
                    <p>
                        This personal project is a multi-page website where when you click on the 
                        different privacy coins it will open a page with more specific information 
                        about them based on their unique id in the API. I created the Privacy Coins 
                        site using React, CSS, the Coin Gecko API, and Netlify for hosting.
                        The main objecttive for this project was to create a site that interacts with
                        a third-party API.
                    </p>
                </div>

                <div className="projects-feature-container">
                    <img src={priv} className="projects-feature-img" alt="Privacy Coins"></img>
                    <img alt=""></img>
                    <img src={privcoins} className="projects-feature-img" alt="Privacy Coins"></img>
                </div>
            </div>
        </motion.div>
    </Layout>
)

export default Priv
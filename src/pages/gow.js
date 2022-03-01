import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import gow from '../images/gow.png'
import gowrealms from '../images/gow-realms.png'
import gowenemies from '../images/gow-enemies.png'
import gowscene from '../images/gow-scene.png'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Gow = () => (
    <Layout>
        <motion.div className="transition-main" initial="hidden" animate="visible" variants={variants}>
            <div className="wrapper">
                <div className="projects-large-container">
                    <div>
                        <img src={gow} className="projects-main-img" alt="God of War"></img>
                    </div>

                    <h1 className="projects-header">
                        God of War
                    </h1>
                </div>

                <div className="projects-details">
                    <div  className="details-left">
                        <p>
                            Live Site
                        </p>
                        <a className="projects-link" href="https://godofwar-tribute.netlify.app" target="_blank" rel="noopener noreferrer">https://godofwar.netlify.app</a>
                    </div>
                    <div  className="details-right">
                        <p>
                            Project Date
                        </p>
                        <p>
                            Fall 2021
                        </p>
                    </div>
                </div>


                <div className="projects-breakdown">
                    <p>
                        This personal project is a multi-page fully responsive website. It is
                        meant to be a place to get some quick info about the different aspects
                        of the game including information about some of the main characters, the 
                        different realms and what you will encounter there, and the enemies you 
                        will fight along the way. I created the God of War site using Gatsby, 
                        SASS, and hosted on Netlify.
                    </p>
                </div>

                <div className="projects-feature-container">
                    <img src={gowrealms} className="projects-feature-img" alt="God of War"></img>
                    <img src={gowscene} className="projects-feature-img" alt="God of War"></img>
                    <img src={gowenemies} className="projects-feature-img" alt="God of War"></img>
                </div>
            </div>
        </motion.div>
    </Layout>
)

export default Gow
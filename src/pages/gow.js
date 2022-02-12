import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import gow from '../images/gow.jpg'
import gowrealms from '../images/gow-realms.png'
import gowenemies from '../images/gow-enemies.png'
import gowscene from '../images/gow-scene.jpg'

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
                        <a className="projects-link" href="https://s3vrus.github.io/GoW-Site/">https://godofwar.netlify.app</a>
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
                        This personal project is a multi-page fully responsive website. I created 
                        the God of War site using Gatsby, SASS, and hosted on Netlify.
                        This was my first time building out a full website so this whole site was
                        a big learning process. While building I vastly improved my CSS and best
                        practices for creating page layouts.
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
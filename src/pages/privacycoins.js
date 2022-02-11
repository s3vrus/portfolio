import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import priv from '../images/priv.png'

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
                        <a className="projects-link" href="https://privacy-coins.netlify.app/">https://privacy-coins.netlify.app/</a>
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
                        This personal project is a multi-page fully responsive website . I created 
                        the God of War site using Gatsby, SASS, and hosted on Netlify.
                        This was my first time building out a full website so this whole site was
                        a big learning process. While building I vastly improved my CSS and best
                        practices for creating page layouts.
                    </p>
                </div>
            </div>
        </motion.div>
    </Layout>
)

export default Priv
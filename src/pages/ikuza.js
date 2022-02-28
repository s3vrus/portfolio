import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import ikuza from '../images/ikuza-mint.png'
import ikuzaRm from '../images/ikuza-roadmap.png'
import ikuzaTeam from '../images/ikuza-team.png'
import ikuzaAbout from '../images/ikuza-about.png'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Ikuza = () => (
    <Layout>
        <motion.div className="transition-main" initial="hidden" animate="visible" variants={variants}>
            <div className="wrapper">
                <div className="projects-large-container">
                    <div>
                        <img src={ikuza} className="projects-main-img" alt="Ikuza"></img>
                    </div>

                    <h1 className="projects-header">
                        IKUZA
                    </h1>
                </div>

                <div className="projects-details">
                    <div  className="details-left">
                        <p>
                            Live Site
                        </p>
                        <a className="projects-link" href="https://ikuza.netlify.app/" target="_blank" rel="noopener noreferrer">https://ikuza.netlify.app/</a>
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
                        This is an NFT project site inspired by the Azuki brand. It is a single page React App with a minting section
                        when you first open the page, then as you scroll you will find an about section, a roadmap,
                        and a section showing the team. For the styling I used SASS and hosted it on Netlify. All of
                        the images seen on the site are directly from the Azuki site with the colors inverted. It also
                        looks great on all device sizes.
                    </p>
                </div>

                <div className="projects-feature-container">
                    <img src={ikuzaAbout} className="projects-feature-img" alt="mint"></img>
                    <img src={ikuzaRm} className="projects-feature-img" alt="roadmap"></img>
                    <img src={ikuzaTeam} className="projects-feature-img" alt="team"></img>
                </div>
            </div>
        </motion.div>
    </Layout>
)

export default Ikuza
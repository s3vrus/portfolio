import * as React from "react"
import Layout from "../components/layout"
import me from "../images/me.jpg"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const About = () => (
    <Layout>
        <motion.div className="transition-main" initial="hidden" animate="visible" variants={variants}>
            <div className="wrapper">
                <h1 className="about-large-heading">Collin Osborne</h1>
                <div className="about-hero">
                    <div> {/* on hover show height could be cool */}
                        <img src={me} className="img-container2" alt="picture of me"></img>
                    </div>
                    <div className="about-container">
                        <p className="about-text">
                            <span>I am a
                                <span className="semi-bold"> Front End Developer </span>
                                with a bit of backend expierience. I've done work and have 
                                interest in a wide range of areas from 
                                <span className="semi-bold"> UI/ UX Design </span>
                                and 
                                <span className="semi-bold"> Application Development </span>
                                to
                                <span className="semi-bold"> Cloud Computing </span>
                                and 
                                <span className="semi-bold"> Data Management. </span>
                                In my free time I enjoy coding, hiking, taking my dog on walks, 
                                researching blockchain based projects, reading, and some occasional gaming
                            </span>
                        </p>
                        
                        <div className="spacer2"></div>

                        <p className="about-text">
                            Currently based in Fishers, IN but will be relocating to Highlands Ranch, CO soon
                        </p>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="spacer"></div>
            </div>
        </motion.div>
    </Layout>
)

export default About
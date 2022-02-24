import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import nftConnected from '../images/nft-connected.png'
import nftPage from '../images/nft-page.png'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Nft = () => (
    <Layout>
        <motion.div className="transition-main" initial="hidden" animate="visible" variants={variants}>
            <div className="wrapper">
                <div className="projects-large-container">
                    <div>
                        <img src={nftConnected} className="projects-main-img" alt="Nft info"></img>
                    </div>

                    <h1 className="projects-header2" color="#0F0E0E">
                        NFT Info
                    </h1>
                </div>

                <div className="projects-details">
                    <div  className="details-left">
                        <p>
                            Live Site
                        </p>
                        <a className="projects-link" href="https://nft-collection-info.netlify.app/" target="_blank" rel="noopener noreferrer">https://nft-collection-info.netlify.app/</a>
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
                        I made this app because I felt there was no easy way to check on multiple NFT collection stats that 
                        you own. You either can look at a leaderboard of top projects or search them all individually. With 
                        this you simply login by connecting your MetaMask and then it will give information 
                        about every collection in your wallet. For users with a diverse NFT portfolio this can save 
                        them a lot of time. This is a React app using the OpenSea API and hosted on Netlify. I decided to
                        keep the UI simple and focus more on functionality for this project.
                    </p>
                </div>

                <div className="projects-feature-container">
                    <img src={nftConnected} className="projects-feature-img" alt="Nft connected"></img>
                    <img alt=""></img>
                    <img src={nftPage} className="projects-feature-img" alt="Nft collection page"></img>
                </div>
            </div>
        </motion.div>
    </Layout>
)

export default Nft
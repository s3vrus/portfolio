import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import nftcentral from '../images/nftcentral.png'
import nftcoin from '../images/nft-coin.png'
import nftprofile from '../images/nft-profile.png'
import nftlogged from '../images/nft-logged.png'

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
                        <img src={nftcentral} className="projects-main-img" alt="NFT Central"></img>
                    </div>

                    <h1 className="projects-header">
                        NFT Central
                    </h1>
                </div>

                <div className="projects-details">
                    <div  className="details-left">
                        <p>
                            Live Site
                        </p>
                        <a className="projects-link" href="https://nft-central.netlify.app/" target="_blank" rel="noopener noreferrer">https://nft-central.netlify.app/</a>
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
                        This personal project is a multi-page React App. On the home page it lists NFT based
                        crypto currnecies and when you click on them it will open a page with more specific information 
                        about each coin based on their unique ID in the CoinGecko API. The user can also 
                        connect their MetaMask to have access to the profile page. On the profile page
                        it will give information about every collection in your wallet. I added this feature because 
                        I felt there was no easy way to check on multiple NFT collection stats that you own. For 
                        users with a diverse NFT portfolio this can save them a lot of time.
                        I made NFT Central using React, SASS, the Coin Gecko API, OpenSea API and Netlify for hosting.
                        I do plan on adding NFT and GameFi based features as I think of use cases so at some point
                        this can be a one stop shop for all things NFT. 
                    </p>
                </div>

                <div className="projects-feature-container">
                    <img src={nftlogged} className="projects-feature-img" alt=""></img>
                    <img src={nftcoin} className="projects-feature-img" alt=""></img>
                    <img src={nftprofile} className="projects-feature-img" alt=""></img>
                </div>

                <div className="next-project">
                    <a href="/gow">Next Project</a>
                </div>

            </div>
        </motion.div>
    </Layout>
)

export default Priv
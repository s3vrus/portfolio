import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Gow = () => (
    <Layout>
        <motion.div className="transition-main" initial="hidden" animate="visible" variants={variants}>
            <div className="wrapper">
                
            </div>
        </motion.div>
    </Layout>
)

export default Gow
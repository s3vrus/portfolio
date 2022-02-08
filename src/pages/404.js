import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 className="error-page">404: Not Found</h1>
  </Layout>
)

export default NotFoundPage
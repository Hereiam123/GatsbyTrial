import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>This is the start of the project</h1>
    <p>Sample Gatsby site.</p>
  </Layout>
)

export default IndexPage

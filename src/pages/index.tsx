import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout"


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Clifford, a reddish-brown pitbull, posing on a coach and looking soically at the camera" 
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" />
    </Layout>
  )
}

export default IndexPage

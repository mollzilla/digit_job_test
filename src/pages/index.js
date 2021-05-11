import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi Everyone</h1>
    <p>Welcome to my Digit Exercise.</p>
    <Link to="/digit-challenge">Go to Digit Challenge</Link>
    <p>
      <a href="https://github.com/mollzilla">My repos</a>
    </p>
  </Layout>
)

export default IndexPage

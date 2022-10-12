import { Link } from "gatsby"
import * as React from "react"
import Layout from "../layouts"

const IndexPage = (props) => {
  return (
    <Layout location={props.location}>
      <p>hì hì</p>
      <Link to="kaka">kaka</Link>
    </Layout>
  )
}

export default IndexPage


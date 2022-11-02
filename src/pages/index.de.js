import { Link } from "gatsby"
import * as React from "react"
import Layout from "../layouts"

const IndexPage = (props) => {
  return (
    <Layout location={props.location}>
      <p>Đức</p>
      <Link to="kaka">kaka</Link>
    </Layout>
  )
}

export default IndexPage


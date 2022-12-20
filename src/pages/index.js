import { Link } from "gatsby"
import * as React from "react"
import Layout from "../layouts"

const IndexPage = (props) => {
  console.log(props);
  return (
    <Layout location={props.location}>
      <p>hihi</p>
      <Link to="kaka">kaykay</Link>
      <Link to="about">about</Link>
      <p>wowo</p>
    </Layout>
  )
}

export default IndexPage


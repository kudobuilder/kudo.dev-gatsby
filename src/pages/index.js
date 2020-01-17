import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const Hero = styled(Img)`
  max-width: 100%;
  display: block;
  margin: 3rem auto 1.5rem;
`

const LinkButton = styled(Link)`
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #2796fc;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #0a88fc;
  margin: auto;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kudo-horizontal-color.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero fluid={data.file.childImageSharp.fluid} />
      <p
        style={{
          maxWidth: `35rem`,
          fontSize: `1.6rem`,
          lineHeight: 1.3,
          color: `#e3e9eb`,
          margin: `1.8rem auto`,
        }}
      >
        The Kubernetes Universal Declarative Operator
      </p>
      <div style={{ textAlign: "center" }}>
        <LinkButton to="/docs">Get Started</LinkButton>
      </div>
    </Layout>
  )
}

export default IndexPage

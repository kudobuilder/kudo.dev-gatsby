/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Container = styled.div`
    display: grid;
    grid-template-areas:
      "header"
      "content"
      "footer";

    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;

    height: 100vh;

    justify-items: center;
  `

  return (
    <>
      <Container>
        <Header
          style={{ gridArea: "header" }}
          siteTitle={data.site.siteMetadata.title}
        />
        <main
          style={{
            gridArea: "content",
            width: "960px",
          }}
        >
          {children}
        </main>
        <footer
          style={{
            gridArea: "footer",
            paddingBottom: "10px",
          }}
        >
          Written in Go, maintained by good people.
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

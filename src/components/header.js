import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import colors from "../utils/colors.js"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kudo-horizontal-color.png" }) {
        childImageSharp {
          fixed(width: 130) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const Navbar = styled.header`
    height: 3.6rem;
    background-color: #2b2d37;
    box-sizing: border-box;
    border-bottom: 1px solid #161923;
    padding: 0.7rem 1.5rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  `

  const Links = styled.div`
    white-space: nowrap;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  `

  const StyledLink = styled(Link)`
    margin: 0;
    padding: 0;
    color: #d0dbdd;
    text-decoration: none;
    font-weight: 500;
    margin-left: 1.5rem;
    font-size: 0.9rem;
    font-family: Open Sans, sans-serif;
  `

  return (
    <Navbar>
      <Link to="/">
        <Img fixed={data.file.childImageSharp.fixed} />
      </Link>
      <Links>
        <StyledLink to="https://kubernetes.com">Docs</StyledLink>
        <StyledLink to="https://kubernetes.com">Blog</StyledLink>
        <StyledLink to="https://kubernetes.com">Community</StyledLink>
        <StyledLink to="https://kubernetes.com">Contribute!</StyledLink>
      </Links>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

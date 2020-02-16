import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const H1 = styled.h1`
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 4em;
`

const H2 = styled.h2`
  font-size: 2em;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1>Hi.</H1>
    <H2>I'm Michael.</H2>
    <p>
      Find me on <a href="https://github.com/mjbcopland">GitHub</a>,{" "}
      <a href="https://www.linkedin.com/in/mjbcopland">LinkedIn</a>, or{" "}
      <a href="mailto:mjbcopland@gmail.com">email</a>.
      <br />
      Want something printable? <a>Here's my CV</a>.
    </p>
  </Layout>
)

export default IndexPage

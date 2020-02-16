import React from "react"
import Helmet from "react-helmet"
import styled, { createGlobalStyle } from "styled-components"
import Tippy from "@tippy.js/react"

import "normalize.css"

import "tippy.js/dist/tippy.css"
import "tippy.js/themes/light.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const GlobalStyle = createGlobalStyle`
  #___gatsby, #gatsby-focus-wrapper, html, body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 28px;
  }

  body {
    font-family: Ubuntu, sans-serif;

    line-height: 1.5em;

    color: white;
    background: deepskyblue;

    text-shadow:
      0  1px  2px rgba(0, 0, 0, 0.07), 
      0  2px  4px rgba(0, 0, 0, 0.07),
      0  4px  8px rgba(0, 0, 0, 0.07), 
      0  8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 
      0 32px 64px rgba(0, 0, 0, 0.07);
  }

  a {
    color: inherit;
    font-style: italic;
    text-decoration: none;
    
    &:hover {
      color: mediumblue;
    }
  }
`

const Main = styled.main`
  min-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 4em;
  box-sizing: border-box;
`

const Header = styled.div`
  position: absolute;

  top: 0;
  right: 0;

  margin: 1em;
`

const Popover = (props) => {
  const { children, target = children[0], content = children[1], ...otherProps } = props
  return <Tippy interactive content={content} children={target} {...otherProps} />
}

const Icon = React.forwardRef((props, ref) => (
  <span ref={ref}>
    <FontAwesomeIcon {...props} />
  </span>
))

const Layout = ({ children }) => (
  <>
    <Helmet
      link={[
        {
          href: "https://fonts.googleapis.com/css?family=Ubuntu&Playfair+Display:400i",
          rel: "stylesheet",
        },
      ]}
    />

    <GlobalStyle />

    <Header>
      <Popover theme="light" placement="bottom-end" appendTo={document.body}>
        <Icon icon={faInfoCircle} />
        <div style={{ margin: "1em" }}>
          <p>&copy; Michael Copland {new Date().getFullYear()}.</p>
          <p>
            Source <a href="https://github.com/mjbcopland/mjbcopland.github.io">on GitHub</a>. Built with{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>.
          </p>
        </div>
      </Popover>
    </Header>

    <Main>{children}</Main>
  </>
)

export default Layout

import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout
        location={this.props.location}
        title="Gatsby Blog Starter"
        pageName="About"
        pageDescript="Hello, It's me"
      >
        Tell us about you
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    allFile(filter: { relativePath: { regex: "/work/" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

class IndexPage extends React.Component {
  render() {
    return (
      <div style={{
        maxWidth:'900px',
        margin:'auto',
        fontWeight:200,
      }}>
      <Img
        fluid={this.props.data.file.childImageSharp.fluid}
      />
        <Layout location={this.props.location} title="Gatsby Blog Starter">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <a style={{ fontSize: '1.5rem' }} href="/blog">
              Blog
            </a>
            <a style={{ fontSize: '1.5rem' }} href="/tags">
              Tags
            </a>
            <a style={{ fontSize: '1.5rem' }} href="/gallery">
              Gallery
            </a>
            <a style={{ fontSize: '1.5rem' }} href="/meme">
              Meme
            </a>
            <a style={{ fontSize: '1.5rem' }} href="/about">
              About
            </a>
          </div>
        </Layout>
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "yozakura.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

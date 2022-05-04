import * as React from "react"
import PropTypes from 'prop-types';

import Layout from '../components/layout';

const IndexPage = ({ location }) => {
  return (
    <Layout pageTitle="Home Page" location={location}>
      <p>I'm making this by following the  Tutorial.</p>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage

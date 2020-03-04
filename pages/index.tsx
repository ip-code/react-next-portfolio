import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout title="IP Code - Home">
          <h3>Ip Code</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            Solar system, Earth
          </p>
          <p className="email">
            <i className="fas fa-envelope"></i>
            ip-code@spacemail.com
          </p>
          <p>Developer Trainee</p>
    </Layout>
  )
}

export default IndexPage

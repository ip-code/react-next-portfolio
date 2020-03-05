import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout title="IP Code">
          <h3>Ip Code</h3>
          <p className="location">
            <i className="fa fa-map-marker"></i> Solar system, Earth
          </p>
          <p className="email">
            <i className="fa fa-envelope"></i> ip-code@spacemail.com
          </p>
          <p>Developer Trainee</p>
          
    </Layout>
  )
}

export default IndexPage

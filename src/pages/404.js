import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledButton = styled(Button)`
  margin: 0.5rem 0.5rem;
  width: fit-content;
  color: black;
`

const error404 = ({ location }) => {
  return (
    <Layout location={location}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <h2 style={{ fontSize: '10rem', margin: '0rem' }}>404</h2>
        <strong style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Page Not Found
        </strong>
        <p>Looks like I don't have the page you requested.</p>
        <StyledButton variant="light">Go to Home Page</StyledButton>
      </div>
    </Layout>
  )
}

export default error404

import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Container } from 'react-bootstrap'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Container className='wrapper'>
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout;
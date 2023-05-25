import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import FinanceImg from '../Asset/financeImg.webp'


export const About = () => {
    return (
        <Container  >
            <Row className="rounded shadow-lg p-5 mt-4 mb-4">
                <Col md={6}>
                    <Image src={FinanceImg} fluid className="FinanceImg" />
                </Col>
                <Col md={6}>
                    <h1 className="display-4 mb-4"> Finance Calculator</h1>
                    <p className="lead">
                        Finance Calculator is a powerful tool designed to help
                        individuals and real estate professionals calculate their monthly
                        mortgage payments. It takes into account factors such as the purchase
                        price, down payment, interest rate, and loan term to provide accurate
                        estimates.
                    </p>
                    <p>
                        Whether you are a homebuyer, a real estate investor, or a mortgage
                        professional, our calculator can assist you in making informed
                        decisions regarding your financing options. It is user-friendly,
                        intuitive, and provides quick results.
                    </p>
                    <p>
                        We understand the importance of financial planning when it comes to
                        real estate investments, and our goal is to simplify the process by
                        offering this handy tool. Feel free to explore the calculator and
                        calculate your monthly payments based on different scenarios.
                    </p>
                </Col>
            </Row>
        </Container>

    );
}

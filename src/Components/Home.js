import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { CustomInput } from './CustomInput';

export const Home = () => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const { propertyPrice, interestRate, loanTerm, downPayment } = formData;



        const loanAmount = propertyPrice - downPayment;
        const monthlyInterestRate = interestRate / 100 / 12;
        const numberOfPayments = loanTerm * 12;

        const monthlyPayment =
            (loanAmount * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));


        setFormData((prevData) => ({
            ...prevData,
            monthlyPayment: monthlyPayment.toFixed(3), // Rounded to 2 decimal places
        }));


    };

    const inputs = [
        {
            label: 'Property Price',
            name: 'propertyPrice',
            type: 'number',
            step: '0.01', // Allows decimal numbers
            placeholder: '200,000',
            required: true,
        },
        {
            label: 'Down Payment',
            name: 'downPayment',
            type: 'number',
            step: '0.01',
            placeholder: '20000',
            required: true,
        },
        {
            label: 'Interest Rate',
            name: 'interestRate',
            type: 'number',
            step: '0.001', // Allows decimal numbers
            placeholder: '5%',
            required: true,
        },
        {
            label: 'Loan Term',
            name: 'loanTerm',
            type: 'number',
            step: '1',
            placeholder: '2 years',
            required: true,
        },
    ];

    return (
        <Container className="mt-4 mb-2">
            <Form className="border p-5 shadow-lg rounded m-auto" onSubmit={handleOnSubmit}>
                <h2 className="text-dark fw-bolder mb-3 text-center">Finance Calculator</h2>
                <Form.Text>
                    The Finance Calculator provides a seamless experience for users to calculate their mortgage payments and make informed financial decisions.
                </Form.Text>

                <div className="mt-2">
                    {inputs.map((item, i) => (
                        <CustomInput key={i} {...item} onChange={handleInputChange} />
                    ))}
                </div>
                <div className="d-grid">
                    <Button variant="warning p-3" className="text-dark rounded" type="submit">
                        Calculate
                    </Button>
                </div>

                {formData.monthlyPayment && (
                    <div className="bg-dark text-light p-3 text-center mt-4 rounded shadow-lg">
                        <h3>
                            Monthly Payment: ${formData.monthlyPayment}
                        </h3>
                    </div>

                )}
            </Form>
        </Container>
    );
};

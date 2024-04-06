import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { BsEnvelope } from 'react-icons/bs';
import { HiLockClosed } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';


export default function JavascriptProblemForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    problemType: 'syntaxe',
    screenshot: null,
    checkboxChecked: false,
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [formValidated, setFormValidated] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        navigate('/dashboard');
      }, 3000);
    }
    setFormValidated(true);
  };

  return (
    
    <Container className="py-5 bg-dark">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="p-4">
            <Card.Body>
              <div className="text-center mb-4">
                <h4 className="text-primary">Tell Us About Your JavaScript Problem</h4>
                <p className="mb-4 text-muted">Describe your JavaScript problem and provide details to get help.</p>
              </div>
              <Form noValidate validated={formValidated} onSubmit={handleSubmit} className="modern-form">
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>
                    <BsEnvelope className="icon-envelope" /> Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>
                    <HiLockClosed className="icon-lock" /> Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formProblemType" className="mb-3">
                  <Form.Label>
                    <FaCode className="icon-code" /> JavaScript Problem Type
                  </Form.Label>
                  <Form.Select
                    aria-label="Select problem type"
                    name="problemType"
                    value={formData.problemType}
                    onChange={handleChange}
                    required
                  >
                    <option value="syntaxe">Syntax Errors</option>
                    <option value="execution">Execution Issues</option>
                    <option value="bugs">Bugs in Code</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">Please select a problem type.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formScreenshot" className="mb-3">
                  <Form.Label>Upload Screenshot or Code Snippet</Form.Label>
                  <Form.Control
                    type="file"
                    name="screenshot"
                    onChange={handleChange}
                    accept=".png,.jpg,.jpeg,.gif,.txt,.js"
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please upload a screenshot or code snippet.</Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    Upload a screenshot or a file containing a code snippet.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox" className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                    name="checkboxChecked"
                    checked={formData.checkboxChecked}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">You must agree to the terms and conditions.</Form.Control.Feedback>
                </Form.Group>

                <p className="mt-3 text-center">
                  Already have an account? <Link to="/connexion" className="btn btn-link">Login</Link>
                </p>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Submit
                </Button>

              </Form>
              {showSuccessAlert && (
                <Alert variant="success" className="mt-3 d-flex align-items-center justify-content-between">
                  <span>Your problem has been submitted successfully!</span>
                  <AiFillCheckCircle className="ms-2" style={{ fontSize: 20 }} />
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'; // Importez useNavigate pour la redirection

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
  const navigate = useNavigate(); // Initialisez useNavigate

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
        // Redirection vers le tableau de bord après soumission réussie
        navigate('/dashboard'); // Utilisez navigate pour rediriger vers le tableau de bord
      }, 3000);
    }
    setFormValidated(true);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="p-4">
            <Card.Body>
              <div className="text-center mb-4">
                <h4 className="text-primary">Tell us Your Problem JavaScript</h4>
                <p className="mb-4 text-muted">Describe your JavaScript problem and send us the details to get help.</p>
              </div>
              <Form noValidate validated={formValidated} onSubmit={handleSubmit} className="modern-form">
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formProblemType" className="mb-3">
                  <Form.Label>Type de problème JavaScript</Form.Label>
                  <Form.Select
                    aria-label="Sélectionner le type de problème"
                    name="problemType"
                    value={formData.problemType}
                    onChange={handleChange}
                    required
                  >
                    <option value="syntaxe">Erreurs de syntaxe</option>
                    <option value="execution">Problèmes d'exécution</option>
                    <option value="bugs">Bugs dans le code</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">Please select a problem type.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formScreenshot" className="mb-3">
                  <Form.Label>Upload de la capture d'écran ou de l'extrait de code</Form.Label>
                  <Form.Control
                    type="file"
                    name="screenshot"
                    onChange={handleChange}
                    accept=".png,.jpg,.jpeg,.gif,.txt,.js"
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please upload a screenshot or code snippet.</Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    Téléchargez une capture d'écran ou un fichier contenant un extrait de code.
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

                {/* Lien de connexion */}
                <p className="mt-3 text-center">
                  Already have an account? <Link to="/connexion">Login</Link>
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

import React from 'react';
import { Form, Button, Container, Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importer motion depuis framer-motion

export default function Connexion() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Votre logique de connexion ici
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="rounded shadow">
              <Card.Body>
                <div className="text-center mb-4">
                  <Image src='./imgs/Mahmoud2.png' alt="Avatar" className="img-fluid rounded-circle mb-3" style={{ width: 120, height: 120 }} />
                  <h4 className="mb-2">Connexion</h4>
                  <p className="text-muted">Connectez-vous pour accéder à votre compte.</p>
                </div>
                <Form onSubmit={handleSubmit} className="modern-form">
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Control type="email" placeholder="Email" required />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Control type="password" placeholder="Mot de passe" required />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 mb-3">
                    Connexion
                  </Button>
                </Form>
                <div className="text-center">
                  <Link to="/inscription" className="text-decoration-none text-muted">Vous n'avez pas de compte ? Inscrivez-vous ici.</Link>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

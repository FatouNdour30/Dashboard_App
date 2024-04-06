import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCheckCircle, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function AboutDoctorJS() {
  return (
    <Container className="about-doctor-js py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="">
            <h1 className="text-warning ms-md-5">Bienvenue chez Docteur JS</h1>
            <p className="mb-4">La plateforme dédiée au développement web et à la programmation JavaScript</p>
            <p>Docteur JS est votre guide vers l'apprentissage et la maîtrise de JavaScript. Notre mission est de vous fournir des ressources interactives, des projets réels et un soutien communautaire pour développer vos compétences et rester à jour avec les dernières technologies.</p>
          </div>

          <div className="mb-5 text-center">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VIDEO_ID" title="Présentation Docteur JS"></iframe>
            </div>
          </div>

          <Row className="mb-5">
            <Col md={4}>
              <div className="feature-card text-center">
                <FaCheckCircle className="feature-icon text-danger mb-3" />
                <h3>Cours interactifs et pratiques</h3>
                <p>Explorez nos cours interactifs conçus pour renforcer vos compétences JavaScript de manière pratique.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card text-center">
                <FaCheckCircle className="feature-icon text-success mb-3" />
                <h3>Projets réels</h3>
                <p>Participez à des projets réels pour appliquer vos connaissances et développer des solutions concrètes.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card text-center">
                <FaCheckCircle className="feature-icon text-warning mb-3" />
                <h3>Support communautaire</h3>
                <p>Rejoignez notre communauté dynamique de développeurs pour l'entraide, le partage et l'apprentissage collaboratif.</p>
              </div>
            </Col>
          </Row>

          <div className="text-center mb-5">
            <h2 className="text-primary mb-4">Prêt à transformer votre potentiel en excellence ?</h2>
            <p className="lead mb-4">Explorez nos cours interactifs, engagez-vous dans des projets passionnants et élevez vos compétences JavaScript à de nouveaux sommets.</p>
            <Button variant="outline-primary" size="lg">Démarrer l'aventure</Button>
          </div>

          <Row className="social-section mb-5 justify-content-center">
            <Col lg={8} className="text-center">
              <h3 className="text-danger mb-3">Connectons-nous sur les Réseaux Sociaux</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/docteurjs" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon me-2" /></a>
                <a href="https://www.twitter.com/docteurjs" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon me-2" /></a>
                <a href="https://www.linkedin.com/company/docteurjs" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon me-2" /></a>
              </div>
              <p className="text-muted mt-3">Suivez-nous pour des mises à jour exclusives, des contenus inspirants et des opportunités uniques.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutDoctorJS;

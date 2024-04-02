import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCheckCircle, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './AboutDoctorJS.css'; // Import du fichier CSS pour les styles personnalisés

function AboutDoctorJS() {
  return (
    <Container className="about-doctor-js">
      <div className="header-section">
        <h1 className="text-center text-warning mb-4">Bienvenue chez Docteur JS</h1>
        <p className="text-center mb-4">La plateforme dédiée au développement web et à la programmation JavaScript</p>
        <p className="text-center mb-5">Docteur JS est votre guide vers l'apprentissage et la maîtrise de JavaScript. Notre mission est de vous fournir des ressources interactives, des projets réels et un soutien communautaire pour développer vos compétences et rester à jour avec les dernières technologies.</p>
      </div>

      {/* Vidéo de Présentation */}
      <Row className="mb-5 justify-content-center">
        <Col md={8} className="video-wrapper">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VIDEO_ID" allowFullScreen title="Présentation Docteur JS"></iframe>
        </Col>
      </Row>

      {/* Caractéristiques Uniques */}
      <Row className="mb-5">
        <Col md={4} sm={12} className="feature-card">
          <FaCheckCircle className="feature-icon" />
          <h3 className='text-danger'>Cours interactifs et pratiques</h3>
          <p>Explorez nos cours interactifs conçus pour renforcer vos compétences JavaScript de manière pratique.</p>
        </Col>
        <Col md={4} sm={12} className="feature-card">
          <FaCheckCircle className="feature-icon" />
          <h3 className='text-success'>Projets réels</h3>
          <p>Participez à des projets réels pour appliquer vos connaissances et développer des solutions concrètes.</p>
        </Col>
        <Col md={4} sm={12} className="feature-card">
          <FaCheckCircle className="feature-icon" />
          <h3 className='text-warning'>Support communautaire</h3>
          <p>Rejoignez notre communauté dynamique de développeurs pour l'entraide, le partage et l'apprentissage collaboratif.</p>
        </Col>
      </Row>

      {/* Let's Go Section */}
      <Row className="mb-5 justify-content-center">
        <Col md={8} className="text-center">
          <h2 className="text-primary mb-4">Prêt à transformer votre potentiel en excellence ?</h2>
          <p className="lead mb-4">Explorez nos cours interactifs, engagez-vous dans des projets passionnants et élevez vos compétences JavaScript à de nouveaux sommets.</p>
          <Button variant="outline-primary" size="lg">Démarrer l'aventure</Button>
        </Col>
      </Row>

      {/* Réseaux Sociaux */}
      <Row className="social-section justify-content-center mb-5">
        <Col md={8} className="text-center">
          <h3 className='text-danger mb-3'>Connectons-nous sur les Réseaux Sociaux</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/docteurjs" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a>
            <a href="https://www.twitter.com/docteurjs" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
            <a href="https://www.linkedin.com/company/docteurjs" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
          </div>
          <p className="text-muted mt-3">Suivez-nous pour des mises à jour exclusives, des contenus inspirants et des opportunités uniques.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutDoctorJS;

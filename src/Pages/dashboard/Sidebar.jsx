import React from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsHouse, BsPerson, BsListTask, BsEnvelope, BsBarChart, BsGear, BsQuestionSquare, BsBoxArrowRight } from 'react-icons/bs';
import logo from "../../assets/logo.png"; // Assurez-vous que le chemin est correct par rapport à Sidebar.jsx

function Sidebar() {
  return (
    <div className="sidebar-container bg-dark" style={{ minHeight: '100vh', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', width: '"300px' }}>

      {/* Logo et nom de l'application */}
      <Navbar.Brand className="d-flex align-items-center justify-content-center p-3">
        <Image src={logo} alt="Logo" className="logo" style={{ height: '50px', width: 'auto' }} />
        <h3 className="text-warning ms-2">DoctorJS</h3>
      </Navbar.Brand>

      {/* Liens de navigation */}
      <Nav className="flex-column">
        {/* Liens principaux avec animations et effets de survol */}
        <Nav.Item className="nav-item">
          <Link to="/dashboard" className="nav-link text-light d-flex align-items-center py-3">
            <BsHouse className="me-2 icon" />
            <span>Accueil</span>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/dashboard/profil" className="nav-link text-light d-flex align-items-center py-3">
            <BsPerson className="me-2 icon" />
            <span>Profil</span>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/dashboard/problemes" className="nav-link text-light d-flex align-items-center py-3">
            <BsListTask className="me-2 icon" />
            <span>Problèmes</span>
          </Link>
        </Nav.Item>

        {/* Sous-sections avec effets de transition et animations */}
        <Nav.Item className="nav-item">
          <Link to="/dashboard/messages" className="nav-link text-light d-flex align-items-center py-3">
            <BsEnvelope className="me-2 icon" />
            <span>Messages</span>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/dashboard/statistiques" className="nav-link text-light d-flex align-items-center py-3">
            <BsBarChart className="me-2 icon" />
            <span>Statistiques</span>
          </Link>
        </Nav.Item>

        {/* Liens supplémentaires avec effets de survol et animations */}
        <Nav.Item className="nav-item">
          <Link to="/dashboard/parametres" className="nav-link text-light d-flex align-items-center py-3">
            <BsGear className="me-2 icon" />
            <span>Paramètres</span>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/dashboard/aide" className="nav-link text-light d-flex align-items-center py-3">
            <BsQuestionSquare className="me-2 icon" />
            <span>Aide</span>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/dashboard/faq" className="nav-link text-light d-flex align-items-center py-3">
            <BsQuestionSquare className="me-2 icon" />
            <span>FAQ</span>
          </Link>
        </Nav.Item>

        {/* Nouveaux liens ajoutés */}
        <hr className="dropdown-divider text-light my-3" />
        <h6 className="dropdown-header text-light">Nouveaux Liens</h6>
        <Nav.Item className="nav-item">
          <Link to="/dashboard/nouveau-lien-1" className="nav-link text-light d-flex align-items-center py-3">
            <BsBoxArrowRight className="me-2 icon" />
            <span>Nouveau Lien 1</span>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link to="/dashboard/nouveau-lien-2" className="nav-link text-light d-flex align-items-center py-3">
            <BsBoxArrowRight className="me-2 icon" />
            <span>Nouveau Lien 2</span>
          </Link>
        </Nav.Item>
      </Nav>

      {/* Footer du Sidebar */}
      <div className="sidebar-footer p-3 mt-auto">
        <small className="text-warning">© 2024 Nom de l'Application</small>
      </div>
    </div>
  );
}

export default Sidebar;

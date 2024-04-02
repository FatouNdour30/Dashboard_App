import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Chart from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFileAlt, faToolbox, faCertificate } from '@fortawesome/free-solid-svg-icons';

function DashboardContent() {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);

  useEffect(() => {
    const ctx1 = chartRef1.current.getContext('2d');
    const ctx2 = chartRef2.current.getContext('2d');

    if (chartRef1.current && chartRef2.current) {
      // Détruire les graphiques existants s'ils existent
      if (chartRef1.current.chart) {
        chartRef1.current.chart.destroy();
      }
      if (chartRef2.current.chart) {
        chartRef2.current.chart.destroy();
      }

      chartRef1.current.chart = new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: ['Progressions', 'Échecs', 'Certifications'],
          datasets: [{
            label: 'Performances de l\'élève',
            data: [70, 10, 20], // Exemple de données pour les performances de l'élève (à remplacer par les vraies données)
            backgroundColor: [
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true, // Rendre le graphique responsif
          maintainAspectRatio: false, // Permettre à l'élément canvas de s'étendre pour s'adapter à son conteneur
          scales: {
            y: {
              beginAtZero: true,
              max: 100 // Échelle de 0 à 100 pour les performances de l'élève
            }
          }
        }
      });

      chartRef2.current.chart = new Chart(ctx2, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Projet JavaScript',
            data: [50, 70, 60, 80, 90], // Exemple de données pour le projet JavaScript (à remplacer par les vraies données)
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true, // Rendre le graphique responsif
          maintainAspectRatio: false, // Permettre à l'élément canvas de s'étendre pour s'adapter à son conteneur
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, []);

  return (
    <Container fluid className="bg-gray-100 py-3 py-md-5 px-3 px-md-5 mt-md-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={6} lg={3}>
          {/* Premier conteneur de statistiques */}
          <div className="bg-success mb-3 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
            <div className="h-20 bg-red-400 d-flex align-items-center justify-content-center mb-3">
              <FontAwesomeIcon icon={faBook} className="text-white fa-3x text-lg mt-md-3" style={{ fontSize: '2rem' }} />
            </div>
            <div className="px-5 pt-6 mb-2 text-sm text-gray-600 text-center">
              <p className='mb-3 text-white'>COURS</p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className='mb-3'>
          {/* Deuxième conteneur de statistiques */}
          <div className="bg-danger rounded-sm mb-3 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
            <div className="px-5 pt-6 mb-2 text-sm text-gray-600 text-center w-100">
              <FontAwesomeIcon icon={faFileAlt} className="text-white fa-3x text-lg mt-md-3" /> {/* Icône pour "Documentations" */}
            </div>
            <div className="h-20 bg-blue-500 d-flex align-items-center justify-content-center"> {/* Utilisation de justify-content-center pour le centrage horizontal */}
              <p className="text-white text-lg">Documentations</p> {/* Texte "Documentations" ajouté */}
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className='mb-3'>
          {/* Troisième conteneur de statistiques */}
          <div className="bg-warning rounded-sm mb-3 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
            <div className="px-5 pt-6 mb-2 text-sm text-gray-600 text-center w-100">
              <FontAwesomeIcon icon={faToolbox} className="text-white fa-3x text-lg mt-md-3 mb-3" /> {/* Icône pour "Ressources" */}
              <p className="text-white text-lg pl-5">Ressources</p> {/* Texte modifié pour "Ressources" */}
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className='mb-3'>
          {/* Quatrième conteneur de statistiques */}
          <div className="bg-primary mb-3 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
            <div className="px-5 pt-6 mb-2 text-sm text-gray-600 text-center w-100">
              <FontAwesomeIcon icon={faCertificate} className="text-white fa-3x text-lg mb-3 mt-md-3" /> {/* Icône pour "Certifications" */}
              <p className="text-white text-lg pl-5">Certifications</p> {/* Texte modifié pour "Certifications" */}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center bg-white py-3 py-md-5 px-3 px-md-5 shadow-xl mt-md-3">
        <Col xs={12} md={6} lg={6} xl={6}>
          {/* Graphique 1 */}
          <canvas ref={chartRef1} className="w-100" style={{ height: '200px' }}></canvas>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6}>
          {/* Graphique 2 */}
          <canvas ref={chartRef2} className="w-100" style={{ height: '200px' }}></canvas>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardContent;

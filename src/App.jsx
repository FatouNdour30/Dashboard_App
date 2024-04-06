import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Pages/dashboard/Dashboard';
import Inscription from './Pages/inscription/Inscription';
import Connexion from './Pages/Connexion/Connexion';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="grid-container">
          <Dashboard/>
          <Container fluid className="main">
            <Row className="landing">
              <Col>
                <Route exact path="/inscription" component={Inscription} />
                <Route exact path="/connexion" component={Connexion} />
                

                {/* Ajoutez ici les autres routes et composants selon votre besoin */}
              </Col>
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

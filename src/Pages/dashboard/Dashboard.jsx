import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from './Sidebar'; // Importez le composant Sidebar
import Header from './Header'; // Importez le composant Header
import DashboardContent from './DashboardContent'; // Importez le composant DashboardContent
import AboutDoctorJS from '../Connexion/AboutDoctorJS';
function Dashboard() {
  return (
    <Grid container className="dashboard-container">
      {/* Colonne pour le Sidebar */}
      <Grid item xs={3}>
        <Sidebar />
      </Grid>

      {/* Colonne pour le contenu du dashboard */}
      <Grid item xs={9}>
        <div className="main-content">
          {/* Header du dashboard */}
          <Header />

          {/* Contenu principal du dashboard */}
          <DashboardContent />
          <AboutDoctorJS/>
        </div>
      </Grid>
    </Grid>
  );
}

export default Dashboard;

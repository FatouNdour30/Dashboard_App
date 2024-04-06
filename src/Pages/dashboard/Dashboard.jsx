import React from 'react';
import Grid from '@mui/material/Grid'; // Importez Grid depuis @mui/material
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardContent from './DashboardContent';

export default function Dashboard() {
  return (
    <Grid container className="dashboard-container">
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <div className='main-content'>
          <Header/>
          <DashboardContent />
        </div>
      </Grid>
    </Grid>
  );
}

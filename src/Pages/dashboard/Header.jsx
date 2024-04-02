import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Button, Modal, Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { formatDistanceToNow } from 'date-fns';

function Header() {
  // État pour gérer l'ouverture et la fermeture de la modal
  const [openModal, setOpenModal] = useState(false);

  // Tableau de notifications simulées pour tester
  const notifications = [
    { id: 1, title: 'Nouveau message', time: new Date() },
    { id: 2, title: 'Nouvelle demande d\'ami', time: new Date() },
    { id: 3, title: 'Publication partagée', time: new Date() },
  ];

  // Fonction pour ouvrir la modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Fonction pour fermer la modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo ou titre */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Docteur JavaScript
        </Typography>

        {/* Bouton Menu */}
        <IconButton color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        {/* Bouton Notifications avec ouverture de la modal */}
        <IconButton color="inherit" aria-label="notifications" onClick={handleOpenModal}>
          <NotificationsIcon />
        </IconButton>

        {/* Avatar de l'utilisateur */}
        <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />

        {/* Bouton Connexion */}
        <Button color="inherit">Connexion</Button>

        {/* Bouton Inscription */}
        <Button color="inherit">Inscription</Button>

        {/* Icône de compte utilisateur */}
        <IconButton color="inherit" aria-label="account">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>

      {/* Modal de Notifications */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="modal-title" variant="h6" component="h2" mb={2}>
            Notifications
          </Typography>
          <List>
            {notifications.map((notification) => (
              <React.Fragment key={notification.id}>
                <ListItem button>
                  <ListItemText primary={notification.title} secondary={`Il y a ${formatDistanceToNow(notification.time)} - ${notification.time.toLocaleString()}`} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button variant="contained" onClick={handleCloseModal}>Fermer</Button>
          </Box>
        </Box>
      </Modal>
    </AppBar>
  );
}

export default Header;


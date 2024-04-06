import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Button, Modal, Box, List, ListItem, ListItemText, Divider, Menu, MenuItem, TextField, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail'; // Icône pour Nouveau Message
import PublishIcon from '@mui/icons-material/Publish'; // Icône pour Publier le Contenu
import { formatDistanceToNow } from 'date-fns';

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [isComposeOpen, setIsComposeOpen] = useState(false); // État pour afficher le formulaire de nouveau message

  const notifications = [
    { id: 1, title: 'Nouveau message', time: new Date() },
    { id: 2, title: 'Nouvelle demande d\'ami', time: new Date() },
    { id: 3, title: 'Publication partagée', time: new Date() },
  ];

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredNotifications = notifications.filter(notification =>
    notification.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleComposeOpen = () => {
    setIsComposeOpen(true);
  };

  const handleComposeClose = () => {
    setIsComposeOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Docteur JavaScript
        </Typography>

        <IconButton color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <IconButton color="inherit" aria-label="notifications" onClick={handleOpenModal}>
          <NotificationsIcon />
        </IconButton>

        <IconButton color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>

        <TextField
          label="Rechercher..."
          variant="outlined"
          size="small"
          value={searchInput}
          onChange={handleSearchInputChange} className='me-md-3'
        />

        {/* Bouton de Nouveau Message */}
        <IconButton color="inherit" aria-label="new-message" onClick={handleComposeOpen}>
          <MailIcon />
        </IconButton>

        {/* Bouton de Publier le Contenu */}
        <IconButton color="inherit" aria-label="publish-content">
          <PublishIcon />
        </IconButton>

        <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />

        <Button
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
        >
          Mon Profil
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileMenuClose}
        >
          <MenuItem onClick={handleProfileMenuClose}>Gérer le profil</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Déconnexion</MenuItem>
        </Menu>
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
            {filteredNotifications.map((notification) => (
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

      {/* Formulaire de Nouveau Message */}
      <Modal
        open={isComposeOpen}
        onClose={handleComposeClose}
        aria-labelledby="compose-title"
        aria-describedby="compose-description"
      >
        <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="compose-title" variant="h6" component="h2" mb={2}>
            Nouveau Message
          </Typography>
          <TextField label="Sujet" variant="outlined" fullWidth mb={2} />
          <TextField label="Contenu" variant="outlined" fullWidth multiline rows={4} />
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button variant="contained" onClick={handleComposeClose}>Envoyer</Button>
          </Box>
        </Paper>
      </Modal>
    </AppBar>
  );
}

export default Header;

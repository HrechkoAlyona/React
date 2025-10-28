import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Верхняя панель */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Основной контейнер */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Открыть диалоговое окно
        </Button>
      </Container>

      {/* Диалоговое окно */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Использовать Material UI?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это простое React-приложение с использованием Material UI. 
            Вы можете закрыть его и снова открыть при желании.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ОТМЕНА</Button>
          <Button onClick={handleClose} autoFocus>
            СОГЛАСЕН
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;

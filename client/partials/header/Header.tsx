import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header = () => {
  return (
    <AppBar>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            className='logo'
            href='/'
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Technical Assignment
          </Typography>
          <Typography
            href='/add-artical'
            component='a'
            className='linkArtical'
            sx={{
              ml: 'auto',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Add Artical
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

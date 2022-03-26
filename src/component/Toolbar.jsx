import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar as MatToolbar,
  Typography,
} from '@mui/material';
import styles from './Toolbar.module.css';

function Toolbar() {
  return (
    <AppBar position='static'>
      <MatToolbar>
        <Link to='/' className={styles.link}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            GitHub
          </Typography>
        </Link>
        <Link to='/about' className={styles.link}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            About
          </Typography>
        </Link>
      </MatToolbar>
    </AppBar>
  );
}

export default Toolbar;

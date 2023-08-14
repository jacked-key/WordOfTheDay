import { Link, Typography } from '@mui/material';
import * as React from 'react';

export function Footer(): React.ReactElement {
  return (
    // TODO: rick roll fix
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
       Jackie hehe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

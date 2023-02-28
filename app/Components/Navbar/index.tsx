'use client';

import { ReactNode, memo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import theme from '../../../styles/muiTheme';

function Navbar({ children }: {
  children: ReactNode
}) {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
      }}
      >
        <CssBaseline />
        <Topbar open={open} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
        {children}
      </Box>

    </ThemeProvider>
  );
}

export default memo(Navbar);

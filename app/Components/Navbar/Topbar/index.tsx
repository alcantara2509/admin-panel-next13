import { IconButton, Toolbar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "./AppBar";

interface Params {
  open: boolean;
  setOpen: Function;
}

function Topbar({ open, setOpen } : Params) {
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: '24px',
        }}
        className="flex justify-between"
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(!open)}
          sx={{
            marginRight: '36px',
            ...(open && {
              visibility: 'hidden',
            }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <p className="font-bold text-xl">Floater Labs</p>
        <a href="https://github.com/alcantara2509/admin-panel-next13" target="_blank" rel="noopener noreferrer">

          <GitHubIcon />
        </a>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;

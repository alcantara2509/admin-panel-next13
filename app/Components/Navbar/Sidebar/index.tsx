import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import mainListItems from '../../ListItems';
import Drawer from './Drawer';

interface Params {
  open: boolean;
  setOpen: Function;
}

function Topbar({ open, setOpen } : Params) {
  return (
    <Drawer
      variant="permanent"
      open={open}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={() => setOpen(!open)}>
          <ChevronLeftIcon color="secondary" fontSize="large" />
        </IconButton>
      </Toolbar>
      <Divider sx={{
        backgroundColor: "lightGray",
      }}
      />
      <List component="nav">
        {mainListItems}
      </List>
    </Drawer>
  );
}

export default Topbar;

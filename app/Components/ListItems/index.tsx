import * as React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon } from '@mui/icons-material';

const items = [
  {
    icon: <DashboardIcon color="secondary" />,
    title: "Dashboard",
  },
  {
    icon: <ShoppingCartIcon color="secondary" />,
    title: "Orders",
  },
  {
    icon: <PeopleIcon color="secondary" />,
    title: "Customers",
  },
  {
    icon: <BarChartIcon color="secondary" />,
    title: "Reports",
  },
  {
    icon: <LayersIcon color="secondary" />,
    title: "Integrations",
  },
];

const mainListItems = (
  <>
    {items.map((item) => (
      <ListItemButton key={item.title}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    ))}
  </>
);

export default mainListItems;

import * as React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard as DashboardIcon,
  DonutLarge as DonutLargeIcon,
  Timeline as TimelineIcon,
  BarChart as BarChartIcon } from '@mui/icons-material';
import Link from 'next/link';

const items = [
  {
    icon: <DashboardIcon color="secondary" />,
    title: "dashboard",
  },
  {
    icon: <BarChartIcon color="secondary" />,
    title: "bar chart",
  },
  {
    icon: <DonutLargeIcon color="secondary" />,
    title: "donut chart",
  },
  {
    icon: <TimelineIcon color="secondary" />,
    title: "line chart",
  },
];

const mainListItems = (
  <>
    {items.map((item) => (
      <Link key={item.title} href={`/${item.title === "dashboard" ? "" : item.title.split(' ')[0]}`}>
        <ListItemButton>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText className="capitalize" primary={item.title} />
        </ListItemButton>
      </Link>
    ))}
  </>
);

export default mainListItems;

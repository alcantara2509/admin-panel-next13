'use client';

import * as React from 'react';

import { Box, Toolbar, Container, Grid, Paper } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import LinesChart from '../Components/Charts/Lines';
import DoughnutChart from '../Components/Charts/Doughnut';
import VerticalChart from '../Components/Charts/Vertical';
import Footer from '../Components/Footer';

function DashboardContent() {
  return (

    <Box
      component="main"
      sx={{
        backgroundColor: "#0f0f0f",
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{
          mt: 4, mb: 4,
        }}
      >
        <Grid container spacing={4}>
          {/* Chart */}
          <Grid item xs={12} md={7} lg={8}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 300,
                backgroundColor: 'var(--primary)',
              }}
            >
              <VerticalChart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={5} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 300,
                backgroundColor: 'var(--primary)',
              }}
            >
              <DoughnutChart />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 300,
                backgroundColor: 'var(--primary)',
              }}
            >
              <LinesChart />
            </Paper>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

import * as React from 'react';

import { Box, Toolbar, Container, Grid, Paper } from '@mui/material';
import DoughnutChart from '../Components/Charts/Doughnut';
import Footer from '../Components/Footer';

function DonutsContent() {
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

          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 600,
                backgroundColor: 'var(--primary)',
              }}
            >
              <DoughnutChart />
            </Paper>
          </Grid>

        </Grid>
        <Footer />
      </Container>
    </Box>
  );
}

export default function DonutsPage() {
  return <DonutsContent />;
}

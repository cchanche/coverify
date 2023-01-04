import { Container, Grid, Typography } from "@mui/material";
import React from "react";

export const Home = () => {
  return (
    <Container sx={{ height: "100%" }}>
      <Grid
        container
        sx={{ height: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h3">Coverify</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

import { Container, Grid, Typography, Button } from '@mui/material';
import querystring from 'query-string';
import React, { useMemo } from 'react';

export const Home = () => {
  const { code: access_token } = useMemo(
    () => querystring.parseUrl(document.location.href).query,
    [],
  );

  console.log(access_token);

  return (
    <Container sx={{ height: '100%' }}>
      <Grid
        container
        sx={{ height: '100%' }}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        spacing={4}
      >
        <Grid item xs={12} textAlign="center">
          <Typography variant="h3">Coverify</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              document.location =
                'https://accounts.spotify.com/authorize?' +
                querystring.stringify({
                  response_type: 'code',
                  client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
                  scope: 'user-read-private user-read-email',
                  redirect_uri: 'http://localhost:3000',
                  state: 12,
                });
            }}
          >
            Log-in
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

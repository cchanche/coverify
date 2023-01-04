import { ThemeProviderProps } from "@emotion/react";
import { createTheme, CSSObject, Theme, ThemeProvider } from "@mui/material";
import React, { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { GlobalProps } from "@emotion/react";

export const ThemeWrapper: (
  props: Omit<ThemeProviderProps, "theme">
) => React.ReactElement<ThemeProviderProps> = (props) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
        typography: {
          fontFamily: ['"Source Sans Pro"', "sans-serif"].join(","),
        },
      }),
    []
  );

  const globalStyles = useMemo<(theme: Theme) => CSSObject>(
    () => (_) => ({
      body: {
        height: "100vh",
      },
      divroot: {
        height: "100%",
      },
    }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <GlobalStyles
        styles={{
          body: {
            height: "100vh",
          },
          "body > div#root": {
            height: "100%",
          },
        }}
      />
      {props.children}
    </ThemeProvider>
  );
};

import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { COLORS } from "./constant/colors";
import AppRouter from "./routers/router";
import store from "./redux/redux";
import "./assets/sass/global.sass";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: COLORS.primary,
        contrastText: COLORS.white,
      },
      secondary: { main: COLORS.secondary },
    },
  });
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </Provider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        limit={8}
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;

import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./signIn.sass";
import { Button, Paper, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import UserIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import SendIcon from "@mui/icons-material/Send";
import AccountIcon from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { StorageApp } from "../../utils/StorageApp";
import { setActionAuth, setIsAuth } from "../../redux/auth/AuthActions";
import { SET_USER_AUTH } from "../../redux/auth/Authtypes";
import { IUser } from "../../interfaces/IUser";
import TaskService from "../../core/task/TaskService";
import AuthService from "../../core/auth/AuthService";

interface State {
  username: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
}
const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((reducer: any) => reducer.authReducer);
  const history = useHistory();
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [state, setState] = useState<State>({
    username: "",
    password: "",
    showPassword: false,
    loading: true,
  });
  const { username, password, showPassword } = state;
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const callackSignin = async () => {
    if (!username?.trim() || !password?.trim()) {
      toast.warning("empty_field");
      return;
    }
    if (username !== "admin" && password !== "admin") {
      toast.error("Invalid user data");
      return;
    }
    let user: IUser = {
      displayName: username,
      email: `${username}@admin.com`,
      photoURL: "https://picsum.photos/200/300",
    };
    setActionAuth(dispatch, SET_USER_AUTH, user);
    StorageApp.setItem({ user });
    allowSigin();
  };
  const allowSigin = async () => {
    dispatch(setIsAuth(true));
    StorageApp.setItem({ auth: true });
  };
  const changeHistory = (path: string) => {
    history.push(path);
  };
  const callbackInfo = () => {
    setShowInfo(false);
  };
  const callbackDone = (user: IUser) => {
    setActionAuth(dispatch, SET_USER_AUTH, user);
    StorageApp.setItem({ user });
    allowSigin();
    changeHistory("/dashboard");
    TaskService.hide();
  };
  const callbackGoogleSigin = async () => {
    TaskService.show();
    AuthService.signInWithGoogle(
      (user: IUser) => {
        callbackDone(user);
      },
      () => TaskService.hide()
    );
  };
  const callbackFacebookSigin = () => {
    TaskService.show();

    AuthService.signInWithFacebook(
      (user: IUser) => {
        callbackDone(user);
      },
      () => TaskService.hide()
    );
  };

  //
  if (auth.isAuth) return <Redirect to="/dashboard" />;
  return (
    <>
      <div className="signin__wrap">
        <div className="signin__wrap__container">
          <Paper
            elevation={8}
            sx={{
              background: "#f8762b",
              color: "#fff",
              borderRadius: "12px",
            }}
            className={`signin__wrap__card ${
              showInfo ? "signin__wrap__card--show" : ""
            }`}
          >
            <Stack className="signin__wrap__card__data">
              <div className="signin__wrap__card__body">
                <Typography variant="h4">Welcome </Typography>
                <Typography variant="body1">
                  user:admin
                  <br />
                  password:admin
                </Typography>
              </div>
              <Stack direction="row" className="signin__wrap__card__footer">
                <p>{"developer"}</p>
                <div>
                  <Link to="landing" className="link link--light">
                    real-plaza
                  </Link>
                </div>
              </Stack>
            </Stack>
          </Paper>

          <Paper
            elevation={8}
            sx={{
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
            }}
            className="signin__wrap__form"
          >
            <Box
              sx={{
                display: "flex",
                padding: "1em",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                className="signin__wrap__info"
                onClick={() => setShowInfo(true)}
              >
                <i className="bx bxs-help-circle"></i>
              </div>
              <AccountIcon sx={{ fontSize: "90px" }} color="primary" />

              <Typography variant="h4">{"signin_title"}</Typography>

              <Stack
                direction="row"
                spacing={2}
                sx={{ margin: "16px 0", width: "100%" }}
              >
                <Tooltip title="Iniciar sesión con google">
                  <Button
                    onClick={() => callbackGoogleSigin()}
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    sx={{ flexGrow: 1 }}
                  >
                    Iniciar con Google
                  </Button>
                </Tooltip>
              </Stack>
              <div className="signin__wrap__item">
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-username">
                    Username
                  </InputLabel>
                  <OutlinedInput
                    autoComplete="off"
                    id="outlined-adornment-username"
                    type={"text"}
                    value={username}
                    onChange={handleChange("username")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle username visibility"
                          edge="end"
                        >
                          <UserIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Username"
                  />
                </FormControl>
              </div>
              <div className="signin__wrap__item">
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>
              {/* <div className="signin__wrap__password">
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => changeHistory("forgot-password")}
                  startIcon={<PasswordIcon />}
                >
                  {"forgot_password"}
                </Button>
              </div> */}
              <div className="signin__wrap__password">
                <Button
                  fullWidth
                  onClick={callackSignin}
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  {"btn_signin"}
                </Button>
              </div>
            </Box>
          </Paper>
        </div>
      </div>
      {showInfo && (
        <div
          onClick={callbackInfo}
          className="overlay__fade signin__wrap__card__close"
        />
      )}
    </>
  );
};

export default SignIn;

import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "react-google-login";
function App() {
  const clientId =
    "159130820163-u8bn9fr1cm6hqe55o2vqvpvqga3vpv62.apps.googleusercontent.com";

  const loginSuccess = (res) => {
    console.log("login success", res.profileObj);
  }; // on login success function

  const loginFailure = (res) => {
    console.log("login fail", res);
  }; // on login failure function
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={loginSuccess}
      onFailure={loginFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default App;

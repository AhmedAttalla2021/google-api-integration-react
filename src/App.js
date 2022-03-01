import { useState } from "react";
import "./App.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
function App() {
  const clientId =
    "159130820163-u8bn9fr1cm6hqe55o2vqvpvqga3vpv62.apps.googleusercontent.com";
  const [showLoginBtn, setShowLoginBtn] = useState(true);
  const loginSuccess = (res) => {
    console.log("login success", res.profileObj);
    setShowLoginBtn(false);
  }; // on login success function

  const loginFailure = (res) => {
    console.log("login fail", res);
  }; // on login failure function

  const logoutSuccess = () => {
    console.log("logout success");
    setShowLoginBtn(true);
  };
  return (
    <div className="login-logout-btn">
      {showLoginBtn ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={loginSuccess}
          onFailure={loginFailure}
          cookiePolicy={"single_host_origin"}
        />
      ) : (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={logoutSuccess}
        ></GoogleLogout>
      )}
    </div>
  );
}

export default App;

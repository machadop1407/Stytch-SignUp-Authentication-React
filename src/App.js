import "./App.css";
import { useCallback } from "react";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { StytchProvider } from "@stytch/react";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ResetPassword } from "./pages/ResetPassword";

function App() {
  const stytchClient = new StytchHeadlessClient(
    "public-token-test-ff6b4fe6-6182-4160-88e7-2a45a39bb8ca"
  );

  const logout = useCallback(() => {
    stytchClient.session.revoke();
  }, [stytchClient]);

  return (
    <div className="App">
      <Router>
        <Link to="/signup"> SignUp</Link>
        <Link to="/auth"> Login</Link>
        <StytchProvider stytch={stytchClient}>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/resetpassword/*" element={<ResetPassword />} />
          </Routes>
          <button onClick={logout}>Logout</button>
        </StytchProvider>
      </Router>
    </div>
  );
}

export default App;

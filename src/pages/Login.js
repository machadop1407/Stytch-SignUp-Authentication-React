import React from "react";
import { useState, useCallback } from "react";
import { useStytch } from "@stytch/react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stytchClient = useStytch();

  const resetPasswordByEmail = useCallback(() => {
    stytchClient.passwords.resetByEmailStart({
      email: "pedro@pedrotech.co",
    });
  }, [stytchClient]);

  const login = () => {
    stytchClient.passwords.authenticate({
      email,
      password,
      session_duration_minutes: 60,
    });
  };

  return (
    <>
      <input
        placeholder="Email..."
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        placeholder="Password..."
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}> Login</button>

      <div>
        <p> Forgot your password? </p>
        <button onClick={resetPasswordByEmail}> Reset Password</button>
      </div>
    </>
  );
};

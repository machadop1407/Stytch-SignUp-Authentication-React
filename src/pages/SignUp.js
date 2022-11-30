import React from "react";
import { useState, useCallback } from "react";
import { useStytch } from "@stytch/react";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stytchClient = useStytch();

  const signUp = () => {
    stytchClient.passwords
      .strengthCheck({ email, password })
      .then((res) => {
        console.log("Success: ", res);
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
    stytchClient.passwords.create({
      email,
      password,
      session_duration_minutes: 60,
    });
  };

  return (
    <div>
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

      <button onClick={signUp}> Sign Up</button>
    </div>
  );
};

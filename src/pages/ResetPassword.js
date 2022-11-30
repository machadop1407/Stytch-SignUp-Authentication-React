import React from "react";
import { useState, useCallback } from "react";
import { useStytch } from "@stytch/react";

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");

  const stytchClient = useStytch();

  const token = new URLSearchParams(window.location.search).get("token");

  const resetPassword = useCallback(() => {
    stytchClient.passwords.resetByEmail({
      token,
      password: newPassword,
      session_duration_minutes: 60,
    });
  }, [stytchClient, token, newPassword]);

  return (
    <div>
      <input
        placeholder="New Password..."
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />

      <button onClick={resetPassword}> Reset Password</button>
    </div>
  );
};

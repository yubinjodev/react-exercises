import { useState } from "react";

const password = "yubin";

export const Login = ({ user, login, logout }) => {
  const [input, setInput] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (input === password) login();
    else if (input === "") alert("enter pw");
    else alert("wrong pw");
    setInput("");
  };
  return (
    <>
      {user ? (
        <button onClick={logout}>LOGOUT</button>
      ) : (
        <>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="password"
          />
          <button onClick={handleLogin}>LOGIN</button>
        </>
      )}
    </>
  );
};

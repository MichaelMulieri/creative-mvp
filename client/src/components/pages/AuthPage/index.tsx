import { useState } from "react";
import { signUp } from "../../../http";

const AuthPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpSubmit = (event: any) => {
    event.preventDefault();
    signUp(userName, password);
  };

  return (
    <div>
      Authpage placeholder
      <form onSubmit={handleSignUpSubmit}>
        <h1>sign up</h1>
        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default AuthPage;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Form/Button";
import Input from "../components/Form/Input";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log("funfou");
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  };

  return (
    <>
      <section>
        Login Form
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <Input
            handleChange={({ target }) => setUsername(target.value)}
            label="Usuário"
            type="text"
            name="username"
          />
          <Input
            handleChange={({ target }) => setPassword(target.value)}
            label="Senha"
            type="password"
            name="password"
          />
          <Button>Entrar</Button>
        </form>
        <Link to="/login/criar">Cadastros</Link>
      </section>
    </>
  );
};

export default LoginForm;

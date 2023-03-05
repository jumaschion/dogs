import React from "react";

const TokenPost = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");

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
        setToken(json.token);
        return json;
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p style={{ wordBreak: "break-all" }}> {token}</p>
      <input
        type="text"
        placeholder="Nome de usuário"
        name=""
        id=""
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        placeholder="Senha"
        name=""
        id=""
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default TokenPost;

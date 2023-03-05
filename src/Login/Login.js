import { Route, Routes } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginLostPassword from "./LoginLostPassword";
import LoginReset from "./LoginReset";

const Login = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="lost" element={<LoginLostPassword />} />
        <Route path="reset" element={<LoginReset />} />
      </Routes>
    </>
  );
};

export default Login;

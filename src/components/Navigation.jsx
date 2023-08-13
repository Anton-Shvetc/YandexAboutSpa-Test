import React from "react";
import { Link } from "react-router-dom";
import useToken from "./useToken";
function Navigation() {
  const { token, setToken } = useToken();


  const logout = () => {
    sessionStorage.removeItem("token");
    setToken({});
  };


  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Домой</Link>
        </li>
        <li>
          <Link to="/about">Обо мне</Link>
        </li>
        <li>
          <Link to="/optional">Дополнительная инфомрация</Link>
        </li>
        <li>
          {!token ? (
            <Link to="/login">Вход</Link>
          ) : (
            <Link to="/" onClick={logout}>
              Выход
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import useToken from "./useToken";

function Navigation() {
  const { token, setToken } = useToken();

  const logout = () => {
    sessionStorage.removeItem("token");
    setToken({});
  };

  const pages = [
    { name: "Главная", link: "/" },
    { name: "Обо мне", link: "/about" },
    { name: "Полезные ссылки", link: "/optional" },
    { name: "Бонус", link: "/bonus" },
  ];
  return (
    <AppBar position="static">
      <Container sx={{ maxWidth: "100%" }} maxWidth={false}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <MenuItem key={page.name}>
                <Link href={page.link} color="inherit">
                  {page.name}
                </Link>
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ display: "flex" }}>
            <MenuItem>
              {!token ? (
                <Link href="/login" color="inherit">
                  Вход
                </Link>
              ) : (
                <Link href="/" color="inherit" onClick={logout}>
                  Выход
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              <Link href="/registration" color="inherit">
                Регистрация
              </Link>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;

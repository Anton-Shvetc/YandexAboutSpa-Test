import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";

function Navigation() {

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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;

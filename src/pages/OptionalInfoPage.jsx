import Login from "../components/Login/Login";
import useToken from "../components/useToken";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function OptionalInfoPage() {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <>
        <Box sx={{ maxWidth: "90%", margin: "auto" }}>
          <Typography variant="h2">Полезные ссылки</Typography>
          <Typography variant="h4">
            Это страница с дополнительной информацией
          </Typography>
          <Typography>
            Страница доступна авторизованным пользователям
          </Typography>
        </Box>

        <Login setToken={setToken} />
      </>
    );
  }

  return (
    <Box sx={{ maxWidth: "90%", margin: "auto" }}>
      <Typography variant="h2">Полезные ссылки</Typography>
      <Typography variant="h4">Ссылка на репозиторий:</Typography>
      <Link href="https://github.com/Anton-Shvetc/YandexAboutSpa-Test">
        Перейти
      </Link>
    </Box>
  );
}

export default OptionalInfoPage;

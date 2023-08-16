import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function HomePage() {
  return (
    <>
      <Box sx={{ maxWidth: "90%", margin: "auto" }}>
        <Typography variant="h2"> Домашняя страница </Typography>
        <Typography>
          Привет, это SPA, разработанное на React и Express. В данном приложении
          можно: прочитать историю о том, как программирование стало для тебя
          любимым занятием, найти ссылку на публичный репозиторий с исходниками
          этого приложения, а также увидеть скринкаст, в котором я рассказываю
          про использование классной фишки из CSS.
        </Typography>
      </Box>
    </>
  );
}

export default HomePage;

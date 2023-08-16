import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function NotFoundPage404() {
  return (
    <>
      <Box sx={{ maxWidth: "90%", margin: "auto" }}>
        <Typography variant="h2"> Ошибка 404 </Typography>
        <Typography>Упс... Страница не найдена</Typography>
      </Box>
    </>
  );
}

export default NotFoundPage404;

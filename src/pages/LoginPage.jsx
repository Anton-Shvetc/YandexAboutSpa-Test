import Login from "../components/Login/Login";
import useToken from "../components/useToken";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LoginPage() {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <>
        <Box sx={{ maxWidth: "90%", margin: "auto" }}>
          <Typography variant="h2">Страница авторизации</Typography>
          <Login setToken={setToken} />
        </Box>
      </>
    );
  }

  return (
    <>
      <Box sx={{ maxWidth: "90%", margin: "auto" }}>
        <Typography variant="h2"> Вы авторизованы</Typography>
      </Box>
    </>
  );
}

export default LoginPage;

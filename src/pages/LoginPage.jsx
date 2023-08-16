import Login from "../components/Login/Login";
import useToken from "../components/useToken";

function LoginPage() {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <>
        <h2>Страница доступна авторизованным пользователям</h2>
        <Login setToken={setToken} />
      </>
    );
  }

  return (
    <>
      <h2>Вы авторизованы</h2>
    </>
  );
}

export default LoginPage;

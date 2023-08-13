import Login from "../components/Login/Login";
import useToken from "../components/useToken";

function OptionalInfo() {
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
    <div>
      <h2>Это страница с дополнительной информацией</h2>
    </div>
  );
}

export default OptionalInfo;


import Login from "../components/Login/Login";
import useToken from "../components/useToken";

function OptionalInfoPage() {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <>
        <h2>Это страница с дополнительной информацией</h2>
        <h3>Страница доступна авторизованным пользователям</h3>
        <Login setToken={setToken} />
      </>
    );
  }

  return (
    <div>
      <h4>Ссылка на репозиторий:</h4>
      <a href="https://github.com/Anton-Shvetc/YandexAboutSpa-Test">Перейти</a>
    </div>
  );
}

export default OptionalInfoPage;

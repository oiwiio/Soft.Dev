export const StringDisplay = () => {
  const greeting = "Привет, React!";
  const userName = "Иван";
  const userEmail = " ivan@gmail.com";
  
  return (
    <div>
      <h1>{greeting}</h1>
      <p>Пользователь: {userName}</p>
      <p>Длина имени: {userName.length} символов</p>
      <p>email: {userEmail.trim().toLowerCase()}</p>
    </div>
  );
};
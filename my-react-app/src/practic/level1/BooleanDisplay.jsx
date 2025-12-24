export const BooleanDisplay = () => {
  const isLoggedIn = true;
  const hasPermission = false;
  const score = 85;
  
  return (
    <div>
      <h2>Статусы</h2>
      <p>Вход выполнен: {isLoggedIn ? "✅ Да" : "❌ Нет"}</p>
      <p>Есть доступ: {hasPermission && "🔓 Разрешено"}</p>
      <p>Оценка: {score > 90 ? "Отлично" : score > 60 ? "Хорошо" : "Плохо"}</p>
    
      <p>
        приветсвие: {
            currentHour < 6 ? "Доброй ночи" : 
            currentHour < 12 ? "Добрый день" : 
            currentHour < 18 ? "Добрый вечер" : "Доброй ночи"
        }
      </p>
    </div>
  );
};
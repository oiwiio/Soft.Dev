import { capitalize, formatPhone, calculateAverage } from './utils/format';

export const UsingUtils = () => {
  const name = "иван иванов";
  const phone = "79123456789";
  const grades = [4, 5, 3, 4, 5];
  
  return (
    <div>
      <h2>Использование утилит</h2>
      <p>Имя: {capitalize(name)}</p>
      <p>Телефон: {formatPhone(phone)}</p>
      <p>Средний балл: {calculateAverage(grades).toFixed(2)}</p>
    </div>
  );
};
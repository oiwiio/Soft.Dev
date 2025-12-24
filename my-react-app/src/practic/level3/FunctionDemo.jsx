export const FunctionDemo = () => {
  // Функция внутри компонента
  const formatDate = () => {
    return new Date().toLocaleDateString();
  };
  
  const calculateDiscount = (price, percent) => {
    return price - (price * percent / 100);
  };

  const formatName = (name) => {
    if (!name) return '';
    return name.split(' ')
        .map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase())
        .join(' ');
    };
  
  return (
    <div>
      <h2>Демо функций</h2>
      <p>Сегодня: {formatDate()}</p>
      <p>Скидка на 1000 руб: {calculateDiscount(1000, 15)} руб</p>
    
      <p>форматированное имя: {formatName(userName)}</p>
      <p>примеры: {formatName("петр петров")}, {formatName("АННА СИДОРОВНА")}</p>
    </div>
  );
};
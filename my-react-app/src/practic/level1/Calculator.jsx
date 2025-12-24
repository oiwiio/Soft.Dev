export const Calculator = () => {
  const a = 15;
  const b = 7;
  
  return (
    <div>
      <h2>Калькулятор</h2>
      <p>{a} + {b} = {a + b}</p>
      <p>{a} * {b} = {a * b}</p>
      <p>Среднее: {(a + b) / 2}</p>
      <p>Остаток от деления: {a % b}</p>
      <p>Случайное число: {Math.random()}</p> 

      <p> {a}^{b} = {Math.pow(a,b)}</p>
      <p>Округление a/b : { Math.round(a/b)} </p>
      <p>мин: {Math.min(a,b)} </p>
      <p>макс: {Math.max(a,b)} </p>
    </div>
  );
};
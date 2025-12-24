export const UserList = () => {
  const users = ["Анна", "Борис", "Виктор", "Дарья"];
  const numbers = [1, 2, 3, 4, 5];
  
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user} - индекс {index}</li>
        ))}
      </ul>
      
      <h3>Фильтрованный список (буква А)</h3>
      <ul>
        {users.filter(user => user.includes('А')).map(user => (
          <li>{user}</li>
        ))}
      </ul>

      <h3> сумма чисел массива </h3>
      <p> сумма {numbers.join(' + ')} = {sum}</p>
    </div>
  );
};
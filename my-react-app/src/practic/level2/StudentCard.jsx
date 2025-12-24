export const StudentCard = () => {
  const student = {
    name: "Мария",
    age: 20,
    group: "ПИ-202",
    subjects: ["Математика", "Программирование", "Физика"],
    address: {
      city: "Москва",
      street: "Ленина"
    }
  };
  
  // Деструктуризация
  const { name, age, group } = student;
  const [mainSubject, ...otherSubjects] = student.subjects;

  const {address : {city, street} } = student;

  
  return (
    <div>
      <h2>Карточка студента</h2>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <p>Группа: {group}</p>
      <p>Город: {student.address.city}</p>
      <p>Основной предмет: {mainSubject}</p>
      <p>Другие предметы: {otherSubjects.join(', ')}</p>
    
      <p>aдресс : {city}, ул.{street}</p>
      <p>полный адресс : {city}, ул.{street}</p>
    </div>
  );
};
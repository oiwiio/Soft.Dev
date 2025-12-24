import { useState } from 'react';

export const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Изучить React', completed: true },
    { id: 2, text: 'Написать проект', completed: false },
    { id: 3, text: 'Сдать экзамен', completed: false }
  ]);
  
  const [inputText, setInputText] = useState('');
  
  const addTodo = () => {
    if (!inputText.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputText('');
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const completedCount = todos.filter(t => t.completed).length;
  
  return (
    <div>
      <h2>Список задач</h2>
      
      <div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Новая задача..."
        />
        <button onClick={addTodo}>Добавить</button>
      </div>
      
      <p>Выполнено: {completedCount} из {todos.length}</p>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
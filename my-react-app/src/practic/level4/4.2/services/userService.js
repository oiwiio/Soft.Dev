export const UserService = {
  getAll: async () => {
    // Имитация API запроса
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Анна', role: 'admin' },
          { id: 2, name: 'Борис', role: 'user' },
          { id: 3, name: 'Виктор', role: 'user' }
        ]);
      }, 1000);
    });
  },
  
  getById: async (id) => {
    // Имитация получения по ID
    return { id, name: 'Пользователь', email: 'test@mail.ru' };
  }
};
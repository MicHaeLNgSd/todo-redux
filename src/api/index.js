export const getTodosAPI = () =>
  fetch('https://jsonplaceholder.typicode.com/todos?userId=1').then((res) => res.json());

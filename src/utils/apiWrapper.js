const LS_KEY = 'LS_KEY';
let id = Date.now();

let tasks;
try {
  tasks = JSON.parse(localStorage.getItem(LS_KEY));
} catch (e) {
  console.error('Error on parsing tasks', e);
}

export const getId = _ => id++;

tasks = Array.isArray(tasks) ? tasks : [
  {complited: true, title: 'Create ToDo app', priority: 'Normal', date: '2018-01-01'},
  {complited: false, title: 'Make a plan', priority: 'Low', date: '2018-01-10'},
  {complited: false, title: 'Always commit changes', priority: 'Normal', date: '2018-01-21'},

].map(item => ({ ...item, id: getId() }));

const saveTasks = () => localStorage.setItem(LS_KEY, JSON.stringify(tasks));

export const getTasks = () => new Promise(resolve => setTimeout(resolve, 0, tasks));

export const addTask = data => {
  let task = { ...data, id: getId() };
  tasks.push(task);
  saveTasks();
  return new Promise(resolve => setTimeout(resolve, 0, task));
}

export const removeTask = id => {
  tasks = tasks.filter(item => item.id !== id);
  saveTasks();
  return new Promise((resolve) => setTimeout(resolve, 2000, id));
}

export const updateTask = (id, changes) => {
  tasks = tasks.map(item => item.id !== id ? item : {
    ...item,
    ...changes
  });
  saveTasks();
  return new Promise((resolve) => setTimeout(resolve, 5000, {
    ...tasks.find(item => item.id === id)
  }));
 }

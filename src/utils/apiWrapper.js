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

export const getTasks = () => new Promise(resolve => setTimeout(resolve, 0, tasks));

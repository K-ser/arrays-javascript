const names = ['Kevin', 'Marisol', 'Paulina'];

for (i = 0; i < names.length; i++) {
  console.log(`for: ${names[i]}`)
};

names.forEach(element => {
  console.log(`forEcha: ${element}`)
});

//renderizar lista de tareas 
const app = document.getElementById('app');
const list = document.getElementById('list');

const tasks = [
  {name: 'Comprar lentes', done: true},
  {name: 'Pasear mascota', done: false},
  {name: 'Preparar la cena', done: true},
  {name: 'Hacer tarea', done: false},
  {name: 'Lavar la ropa', done: true},
];

function render (task) {
  list.innerHTML += `
  <li>
    <label for"check-list">
    <input type="checkbox" id="check-list" ${task.done ? 'checked' : ''}>
    ${task.name}
    </label>
  </li>
  `
}

tasks.forEach(render);
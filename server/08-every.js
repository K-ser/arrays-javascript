const numbers = [1,30,39,29,10,13];

let res = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    res = false;
  }
}
console.log(res);

const res2 = numbers.every(num => num < 40)
console.log(res2);

const team = [
  {
    name: 'Nicolas',
    age: 12,
  },
  {
    name: 'Andrea',
    age: 8,
  },
  {
    name: 'Zulema',
    age: 2,
  },
  {
    name: 'Santiago',
    age: 13,
  },
];

const isAccepted = team.every(player => player.age <= 15);
console.log(isAccepted);
isAccepted ? console.log('El equipo es aceptado') : console.log('El equipo no es aceptado');
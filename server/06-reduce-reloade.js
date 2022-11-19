const items = [1, 3, 2, 3];

const counter = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] += 1;
  }
  return obj;
}, {});

console.log(counter);

const persons = [
  {name: 'Kevin', level: 'high',},
  {name: 'Marisol', level: 'medium',},
  {name: 'Paulina', level: 'low',},
  {name: 'Santiago', level: 'low',},
  {name: 'Roberto', level: 'medium',},
];

const levels = persons
.map(item => item.level)
.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] += 1;
  }
  return obj;
}, {});

console.log(levels);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const eval = (x, min, max) => x >= min && x <= max;

const ranges = numbers.reduce((obj, item) => {
  if (eval(item, 1, 5)) {
    obj['1-5'] += 1;
  } else if (eval(item, 6, 8)) {
    obj['6-8'] += 1;
  } else {
    obj['9-10'] += 1;
  }
  return obj;
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0,
});

console.log(ranges);
// const numbers = [1, 2, 3, 4];

// let res = false;
// for (i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   element % 2 === 0 ? res = true : res = false; 
//   break;
// }

// console.log(res);

// const res2 = numbers.some(item => item % 2 === 0);
// console.log(res2);

// const orders = [
//   {
//     customerName: 'Nicolas',
//     total: 60,
//     delivered: true,
//   },
//   {
//     customerName: 'Zulema',
//     total: 120,
//     delivered: false,
//   },
//   {
//     customerName: 'Santiago',
//     total: 180,
//     delivered: true,
//   },
//   {
//     customerName: 'Valentina',
//     total: 240,
//     delivered: true,
//   },
// ];

// const orderDelivered = orders.some(item => !item.delivered);
// console.log(orderDelivered);

const dates = [
  {
    startDate: new Date(2022, 1, 1, 10),
    endDate: new Date(2022, 1, 1, 11),
    title: 'Cita de trabajo',
  },
  {
    startDate: new Date(2022, 1, 1, 15),
    endDate: new Date(2022, 1, 1, 15, 30),
    title: 'Cita con mi jefe',
  },{
    startDate: new Date(2022, 1, 1, 20),
    endDate: new Date(2022, 1, 1, 21),
    title: 'Cena',
  },
];

const newAppointment = {
  startDate: new Date(2022, 1, 1, 8),
  endDate: new Date(2022, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
  return dates.some(date => {
    return areIntervalsOverlapping(
      {start: date.startDate, end: date.endDate},
      {start: newDate.startDate, end: newDate.endDate},      
    )
  })
}
console.log(isOverlap(newAppointment));
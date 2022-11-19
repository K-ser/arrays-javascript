  const months = ['March', 'Jan', 'Feb', 'Dec'];  
  console.log(months);

  const numbers = [1, 30, 4, 21, 100000];
  console.log(numbers.sort((a, b) => a -b));

  const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
  console.log(words.sort((a, b) => a.localeCompare(b)));

  const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date(2022, 11, 10),
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date(2022, 11, 25),
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date(2022, 11, 5),
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date(2022, 11, 18),
    },
  ];
  orders.sort((a,b) => a.date - b.date);
  console.log(orders);


const monthsOrder = ['Febrero', 'Julio', "fsdf", 'Diciembre', 'Enero'];
function monthValue(month) {
    switch (month.toUpperCase()) {
        case'ENERO':
            return1;
        case'FEBRERO':
            return2;
        case'MARZO':
            return3;
        case'ABRIL':
            return4;
        case'MAYO':
            return5;
        case'JUNIO':
            return6;
        case'JULIO':
            return7;
        case'AGOSTO':
            return8;
        case'SEPTIEMBRE':
            return9;
        case'OCTUBRE':
            return10;
        case'NOVIEMBRE':
            return11;
        case'DICIEMBRE':
            return12;
        default:
            //Cualquier valor que no coincida se irá de último
            return13; 
    }
}

months.sort((a, b) => monthValue(a) - monthValue(b))

console.log(months);
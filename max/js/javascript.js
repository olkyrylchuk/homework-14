let circleRadius = prompt('назови радиус окружности');
const  THE_NUMBER_PI = `3.14`
alert(`площадь круга равна ${THE_NUMBER_PI * (circleRadius * circleRadius)}`);


let distance = prompt('назви расстояние между городами (км)');
let timeToTrevel = prompt('назови время за которое необходимо добраться до места назначения (ч)');
alert(`необхоим двигаться о скоростью ${distance / timeToTrevel} км/ч`);


const DOLLAR = 28.2;
const EURO = 31.85;
let dollarSum = prompt('введите сумму в долларах');
alert(`сумма в евро ${DOLLAR * dollarSum / EURO}`);

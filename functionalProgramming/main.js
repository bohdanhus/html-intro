const hasColor = color => rectangle => rectangle.color === color
// function has(color) {
//     return function(rectangle) {
//         return rectangle.color === color
//     }
// }
const isRed = hasColor('red')
// console.log(isRed(rectangle))

const items = [
    { name: 'one', color:'green' },
    { name: 'two', color: 'green'},
    { name: 'three', color: 'blue'},
    { name: 'four', color:'red' },
    { name: 'five', color:'red'},
];
// const getItemWithColor = items.filter(item => item.color === color);
// const getColors = color => getItemWithColor;
// console.log(getColors(green));

const filter = condition => items => items.filter(condition);
// function filter(condition) {
//     return function (items){
//         return items.filter(condition);
//     }
// }
// console.log(filter(isRed)(items))

// const hz = filter(isRed)
// console.log(hz(items))

const reduce =
const array = [1,2,3,4,5];
const summa = array.reduce(function(, ){
    return acc + init;
}, {});
console.log(summa)
console.log('start exe...')
let a = 20;
let b = 40;


setTimeout(() => {
    b = 50;
    console.log('logic exe...')
},  2000);

console.log(a + b)

console.log('end exe...')
// 1 - Berilgan sonlar orasidan juft hamda 5ga karralilarini kopaytmasini topuvchi algoritm
// let num1 = +prompt("Birinchi sonni kiriting");
// let num2 = +prompt("Ikkinchi sonni kiriting");
// let num3 = +prompt("Uchinchi sonni kiriting");

//  let augment = 1;

// if (num1 % 10 == 0){
//     augment = augment * num1;
// }

// if (num2 % 10 == 0){
//     augment = augment * num2;
// }

// if (num3 % 10 == 0){
//     augment = augment * num3;
// }

// console.log(augment);



// 2 - Berilgan sonlar orasidan 3ga yoki 7ga karralilarining kopaytmasini topuvchi algoritm
// let num1 = +prompt("Birinchi sonni kiriting");
// let num2 = +prompt("Ikkinchi sonni kiriting");
// let num3 = +prompt("Uchinchi sonni kiriting");
// let num4 = +prompt("To'rtinchi sonni kiriting");

// let augment = 1;

// if (num1 % 3 == 0  || num1 % 7 == 0){
//     augment *= num1;
// }

// if (num2 % 3 == 0  || num2 % 7 == 0){
//     augment *= num2;
// }

// if (num3 % 3 == 0  || num3 % 7 == 0){
//     augment *= num3;
// }

// if (num4 % 3 == 0  || num4 % 7 == 0){
//     augment *= num4;
// }

// console.log(augment);



// 3 - Berilgan sonning onlar hamda birlar xonasidagi raqamlar kopaytmasini topuvchi algoritm 
// let num1 = 56;

// let onlar = Math.floor(num1 / 10);
// let birlar = num1 % 10;
// let result = onlar * birlar;
// console.log(result); 



// 4 - Berilgan sonning onlar xonasidagi son juft bolsa uning kvadratini aks holda kubini topuvchi algoritm
// let num1 = 47;

// let onlar = Math.trunc(num1 / 10);
// let result;

// if (onlar % 2 == 0){
//     result = Math.pow(num1, 2)
// }
// else{
//     result = num1 ** 3;
// }

// console.log(result);



// 5 - 3 xonali sonning onlar hamda yuzlar xonasidagi sonlarni topuvchi algoritm
// let num1 = 526;

// let onlar =Math.floor(num1 / 10) % 10;
// let yuzlar =Math.floor(num1 / 100);

// console.log(onlar, yuzlar);



// 6 - 3 xonali sonning toq raqamlar kopaytmasini topuvchi algoritm
// let num1 = 453;
// let augment = 1;

// let birlar = num1 % 10;
// let onlar = Math.floor(num1 / 10) % 10;
// let yuzlar = Math.floor(num1 / 100);

// if (birlar % 2 == 1){
//     augment *= birlar;
// }

// if (onlar % 2 == 1){
//     augment *= onlar;
// }

// if (yuzlar % 2 == 1){
//     augment *= yuzlar;
// }

// console.log(augment);



// 7 - 4 xonali sonning juft raqamlari sonini topuvchi algoritm
// let num1 = 6851;
// let counter = 0;

// let birlar = num1 % 10;
// let onlar = Math.floor(num1 % 100) / 10;
// let yuzlar = Math.floor(num1 / 100) % 10;
// let minglar = Math.floor(num1 / 1000);

// if (birlar % 2 == 0){
//     counter++;
// }

// if (onlar % 2 == 0){
//     counter++;
// }

// if (yuzlar % 2 == 0){
//     counter++;
// }

// if (minglar % 2 == 0){
//     counter++;
// }

// console.log(counter);



// 8 - Togri tortburchakning yuzasi perimetridan katta bolsa yuzasini aks holda perimetrini chiqaruvchi algoritm 
// let  a = 10;
// let b = 7;


// let P = (a + b) * 2;
// let S = a * b;

// if (P > S){
//     console.log(P);
// }
// else{
//     console.log(S);
// }
 


// 9 - 5 xonali sondagi nollar sonini topuvchi algoritm
// let num1 = 24009;
// let counter = 0;

// let birlar = num1 % 10;
// let onlar = Math.floor(num1 / 10) % 10;
// let yuzlar = Math.floor(num1 / 100) % 10;
// let minglar = Math.floor(num1 / 1000) % 10
// let on_minglar = (num1 / 10000);

// if (birlar == 0){
//     counter++
// }

// if (onlar == 0){
//     counter++
// }

// if (yuzlar == 0){
//     counter++
// }

// if (minglar == 0){
//     counter++
// }

// if (on_minglar == 0){
//     counter++
// }

// console.log(counter);



// 10 - Poyezd soat nechada ketishini topuvchi algoritm
// let t = 22;
// let T = 10;

// let result = t + T;

// if (result > 23){
//     result = result % 24;
// }

// console.log(result);
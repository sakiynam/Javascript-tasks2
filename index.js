let num1 = +prompt("Birinchi sonni kiriting");
let num2 = +prompt("Ikkinchi sonni kiriting");
let num3 = +prompt("Uchinchi sonni kiriting");


 let augment = 1;


if (num1 % 10 == 0){
    augment = augment * num1;
}

if (num2 % 10 == 0){
    augment = augment * num2;
}

if (num3 % 10 == 0){
    augment = augment * num3;
}

console.log(augment);
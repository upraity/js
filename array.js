//simple
let number = [10,9,10,8];
console.log(number);

//find array length
let number = [10,9,10,8];
console.log(number.length);

//using for loop
let number = [10,9,10,8];
for(let i=0; i<number.length; i++){
  console.log(number[i]);
}

//using for of loop
let number = [10,9,10,8];
for(i of number){
  console.log(i);
}

//using while loop
let i=0, number = [10,9,10,8];
while(i < number.length){
  console.log(number[i]);
}

//using do-while loop
let i=0, number = [10,9,10,8];
do{
  console.log(number[i]);
  i++;
}
while(i < number.length);

//Array Method
//push
let number = ['A','B', 'C','D'];
number.push('E','F');
console.log(number);

//pop
let number = ['A','B','C','D'];
number.pop();
console.log(number);

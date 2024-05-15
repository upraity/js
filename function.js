//simple function
function calling(){
  console.log("Dj Upraity");
}
calling();

//using parameter
function calling1(sms){
  console.log(sms);
}
calling1("SabkaCode");

//sum of two values
function calling3(x, y){
  console.log(x+y);
}
calling3(4,5);

//use return 
function calling4(x, y){
  return x * y;
}
console.log(calling4(3, 5));

//Arrow function
const valueSum = (a, b) => {
  console.log(a + b);
}
valueSum(3, 5);

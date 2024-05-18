/* There are four types of loop in javascript
    1. For Loop
    2. forEach Loop
    3. While Loop
    4. do while Loop
*/

// for loop
for(let i = 0; i <= 5; i++){
  console.log(i + " SabkaCode");
}

//for-in loop
let name = {web:'SabkaCode', website:'Htmlify', host:'Artizote'};
for(n in name){
    let na = name[n];
    console.log(na);
}

// for-of loop
const name = ['Ram', 'Shiva', 'Satya'];
for(let i of name){
    console.log(i);
}

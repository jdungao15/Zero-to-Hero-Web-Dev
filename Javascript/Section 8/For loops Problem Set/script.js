// For Loops Problem set using For Loops

// print all numbers between -10 and 19

console.log("print all numbers between -10 and 19");
for (var x = -10; x <=19; x++) {
  console.log(x);
}

// ! Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
for (var x = 10; x <=40; x+=2) {
  console.log(x);
}


// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
for (var x = 300; x <= 333; x++ ) {
    if(x % 3 === 0) {
      console.log(x);
    }
}

// print all numbers divisible by 5 and 3 between 5 and 50

console.log("print all numbers divisible by 5 and 3 between 5 and 50");
for (var x = 5; x <= 50; x++ ) {
    if(x % 3 === 0 && x % 5 === 0) {
      console.log(x);
    }
}

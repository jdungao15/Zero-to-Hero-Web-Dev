//Printing all numbers

var num = -10;
while (num <= 19) {
  console.log(num);
  num++;
}

//print all even betwen 10 and 40
var num1 = 10;
while (num1 <= 40) {
  if (num1 % 2 == 0) {
    console.log(num1);
  }
  num1++;
}

//print all Odd numbers between 300 and 333
var num2 = 300;
while (num2 <= 333) {
  if (num2 % 2 == 1) {
    console.log(num2);
  }
  num2++;
}

//Priint all numbers divisible by 5 and 3 between 5 and 50

var num3 = 5;

while (num3 <= 50) {
  if(num3 % 3 == 0 && num3 % 5 === 0) {
    console.log(num3);
  }

  num3++;
}

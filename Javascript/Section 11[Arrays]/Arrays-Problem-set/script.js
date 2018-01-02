

// printReverse()

function printReverse(item) {
  var reverse = [];
  //loop indexes
  for (var x = item.length - 1; x >= 0; x--) {
  	console.log(item[x]);
  }
}



// isUniform()

function isUniform (item) {
  var firstItem = item[0];
  for ( var x = 0; x <= item.length - 1; x++) {
    if (firstItem !== item[x]) {
      return false;
    }
  }
  return true;
}


//sumArry()

function sumArray(num) {
  var total = 0;
  num.forEach(function(numbers) {
    total += numbers;
  });
return total;
}


//max

function maxValue(number) {
  var max = number[0];
  for(var i = 0; i <= number.length; i++) {
    if(number[i] > max) {
      max = number[i];
    }
  }
  return max;
}

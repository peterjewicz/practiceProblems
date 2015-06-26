

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:

// You need to round the answer upto 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.


// TAKEN FROM CODEWARS.COM

function SeriesSum(n)
{
  var x =1;
  totalSum = 1;
  if(n == 0)
  {
  	return "0.00";
  }
  if(n == 1)
  {
  	return "1.00";
  }

  while(x < n)
  {
  	var divisor = 1 / (x * 3 + 1);
  	console.log(divisor);
  	totalSum = totalSum + divisor;
  	x++;
  }
  totalSum = String(Math.round(totalSum * 100) / 100);

  if(totalSum.length != 4)
  {
  	totalSum = totalSum + "0";
  }

  return totalSum
}

console.log(SeriesSum(1));


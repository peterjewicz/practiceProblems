<script>
// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works (Ruby example given):

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6


function digital_root(n) {
  n=n.toString();
  x = 0;
  sum=0;

  while(x < n.length )
  {
  	sum = parseInt(n[x]) + sum;
  	x++;
  }


  sum = sum.toString();
  if (sum.length  == 1)
  {
  	return parseInt(sum);
  }
  else
  {
  	sum = digital_root(sum)
  	return parseInt(sum);
  }
}

</script>
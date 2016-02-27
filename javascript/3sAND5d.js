<script>
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Courtesy of ProjectEuler.net and codewars.com

function solution(number){
  var x = 3;
  var total =0;

  while(x < number)
  {
  	if(x % 3 == 0 || x % 5 ==0)
  	{
  		total = total + x;
  	}

  	x++;
  }
  return total;
}

console.log(solution(5000000));
</script>


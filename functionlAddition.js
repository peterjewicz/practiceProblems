
// Create a function add(n) which returns a function that always adds n to any number



//  ***PROBLEM TAKEN FROM CODEWARS.COM*** 

function add(n) {
  return function(x)
  {
    return x + n;
  }
}


alert(add(10)(15));

// Recently, an old farmer found some papers and notes that are believed to have belonged to Feynman. Among notes about mesons and electromagnetism, there was a napkin where he wrote a simple puzzle: "how many different squares are there in a grid of NxN squares?".

// For example, when N=2, the answer is 5: the 2x2 square itself, plus the four 1x1 squares in its corners:

// TAKEN FROM CODEWARS.COM


function countSquares(n){
currentCount = n*n;
n--;
	if(n != 0)
	{
	 currentCount = currentCount + countSquares(n);
	}
return currentCount
}



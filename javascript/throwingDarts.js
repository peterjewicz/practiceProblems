
// Scoring specifications:
// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5

// If all radiuses are less than 5, award 100 BONUS POINTS!

// Write a function that accepts an array of radiuses (can be integers and/or floats), 
// and returns a total score using the above specification.
// An empty array should return 0.

// codewars.com

function scoreThrows(radiuses){
	var x =0;
	var size = radiuses.length;
	var score = 0;
	if(size == 0){return 0;}
	while(x < size)
	{
		if(radiuses[x] < 11 )
		{
			if(radiuses[x] < 5)
			{
				score = score + 10;
			}
			else
			{
				score = score + 5;
			}
		}
		x++;
	}


	if(score == size * 10)
	{
		score = score + 100;
	}
	return score;
}



alert(scoreThrows([1, 2, 3, 4]));


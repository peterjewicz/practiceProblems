//returns the first missing positive number in an array of numbers
//Does so in O(n) time

var firstMissingPositive = function(nums) {

    if(nums.length == 0){return 1;}

    var x = 0;
    numsArray = Array();

    while(x  < nums.length)
    {
        if(nums[x] > -1)
        {
            numsArray[nums[x]]=nums[x];
        }
        x++;
    }

    x=1;

    while(x < numsArray.length)
    {
        if(numsArray[x] == null)
        {
            return x;
        }
        x++;
    }
    return x;
};

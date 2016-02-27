
//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

//Note:
//You must do this in-place without making a copy of the array.
//Minimize the total number of operations.


class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int size = nums.size();
        int y = 0;
        for(int x = 0; x < size; x++ )
        {
            if(nums.at(x) == 0)
            {
                nums.erase (nums.begin() + x);
                nums.push_back(0);
                x--; // needed to accomodate new indexing of vector
            }
            y++;

            if(y == size)
            {
                x = size;
            }
        }
    }
};

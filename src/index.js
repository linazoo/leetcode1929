/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// n = nums.length
// ans = [2n]

// ans[i] == nums[1]
// ans[i + n] == nums[i]

// nums = [n]
// ans = [nums + nums]

// nums= [1,2,1]
// ans = [1,2,1,1,2,1]

// nums =[1,3,2,1]
// ans = [1,3,2,1,1,3,2,1]

// Hint:
// Build an array of size 2 * n and assign num[i] to ans[i] and ans[i + n]

var getConcatenation = function (nums) {
  return nums.concat(nums);
};

const nums = [1, 3, 2, 1];
getConcatenation(nums);

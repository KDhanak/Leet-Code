// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let xorResult = 0;
    for (let num of nums) {
        xorResult ^= num;
    }

    let rightmostSetBit = 1;
    while ((rightmostSetBit & xorResult) === 0) {
        rightmostSetBit <<= 1;
    }

    let group1 = 0,
        group2 = 0;
    for (let num of nums) {
        if ((num & rightmostSetBit) === 0) {
            group1 ^= num;
        } else {
            group2 ^= num;
        }
    }
    console.log([group1, group2]);
    return [group1, group2];
};

singleNumber([1, 2, 1, 3, 2, 5]);

/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let hashMap = {};
    for (let i = 0; i < nums.length; i++){
        if(hashMap[target - nums[i]] !== undefined){
            result=[hashMap[target-nums[i]], i];
        }
        else{
            hashMap[nums[i]] = i;
        }
    }
    return result;
};
// @lc code=end


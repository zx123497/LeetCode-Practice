/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    if (nums.length === 1) {
        if (nums[0] === target) {
            return 0;
        }
        else {
            return -1;
        }
    }

    while (start < end) {
        console.log(start,end);
        let mid = Math.floor((start + end) / 2);
        if (nums[start] === target) {
            return start;
        }
        if (nums[end] === target) {
            return end;
        }
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[start] < nums[mid]) {
            if (target >= nums[start] && target <= nums[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        else if (nums[mid] <= nums[end]) {
            if (target >= nums[mid] && target <= nums[end]) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
        if (end - start === 1) {
            console.log(start,end);
            if (nums[start] === target) {
                return start;
            }
            if (nums[end] === target) {
                return end;
            }
            else {
                return -1;
            }
        }
    }
    return -1;
};
// @lc code=en

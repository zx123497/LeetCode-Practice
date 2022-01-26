/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    let current = [];
    const findCombination = (start, left) => {
        // console.log(left);
        if (left === 0) {
            // console.log('push:',current);
            result.push(current.slice());
            // console.log('slice:',current);
        }

        for (let i = start; i < candidates.length; i++) {
            if (left >= candidates[i]) {
                current.push(candidates[i]);
                // console.log(current, left);
                findCombination(i, left - candidates[i]);
                current.pop();
            }
        };
    };
    findCombination(0,target);
    return result;
};
// @lc code=end


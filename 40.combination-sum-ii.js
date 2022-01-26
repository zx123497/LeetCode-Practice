/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => { return a - b; });
    // console.log(candidates);
    let result = [];
    const dfs = (currentPath, index, remain) => {
        if (remain === 0) {
            result.push(currentPath.slice());
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            // console.log("index",i);
            if (remain >= candidates[i]) {
                // console.log("push",candidates[i]);
                currentPath.push(candidates[i]);
                dfs(currentPath,i + 1, remain - candidates[i]);
                // console.log(currentPath);
                currentPath.pop();
                while(i < candidates.length - 1 & candidates[i] == candidates[i+1]) {
                    i++;
                }
            }
        }
    };
    dfs([], 0, target);
    return result;
};
// @lc code=end


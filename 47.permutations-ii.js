/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    let visited = [];
    nums.sort((a,b)=>a-b);
    const dfs = (path) => {
        if (path.length === nums.length) {
            res.push(path.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] ===true) {
                continue;
            }
            if(i>0&&nums[i]==nums[i-1]&&!visited[i-1]) continue;
            path.push(nums[i]);
            visited[i] = true;
            dfs(path);
            path.pop();
            visited[i] = false;
        }
    };
    dfs([]);
    return res;
};
// @lc code=end


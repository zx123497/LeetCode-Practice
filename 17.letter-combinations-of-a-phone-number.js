/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    const map = [null,null,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];

    
    let res = [];
    digArr = [...digits];
    const go = (ind, str) => {
        if (ind === digArr.length) {
            res.push(str);
            return;
        }

        let chars = map[parseInt(digArr[ind])];
        console.log(chars);
        let arr = [...chars];
        arr.forEach((char) => {
            go(ind + 1, str + char);
        });
            
        
    };

    go(0, '');
    return res;
};
// @lc code=end


/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
  let ans = [n];

  for (let i = 1; i < n; i++) {
    let newVal = [];

    for (let j = 0; j < ans.length; j++) {
      if (ans[j] % i === 1) {
        newVal.push(i);
      }
    }

    ans = ans.concat(...newVal);
  }
};

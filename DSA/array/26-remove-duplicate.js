/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let uniqueNums = Array.from(new Set(nums));
  let difLen = nums.length - uniqueNums.length;
  let uLen = uniqueNums.length;

  for (let i = 0; i < difLen; i++) {
    uniqueNums.push("_");
  }

  return uniqueNums;
};

console.log(removeDuplicates([1, 1, 2]));

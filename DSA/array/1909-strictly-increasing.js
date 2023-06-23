/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let count = 0;
  let first = 0;
  let next = 1;
  while (next < nums.length) {
    if (nums[first] < nums[next]) {
      first++;
      next++;
    } else {
      count++;
      nums.splice(first, 1);
    }
  }
  console.log(nums);
  if (count === 1 || count === 0) return true;
  else return false;
};

console.log(canBeIncreasing([100, 21, 100]));

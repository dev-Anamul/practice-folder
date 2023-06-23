/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const uniqueOne = Array.from(new Set(nums1));
  const uniqueTwo = Array.from(new Set(nums2));
  const uniqueThree = Array.from(new Set(nums3));
  const arr = [...uniqueOne, ...uniqueTwo, ...uniqueThree];
  const ansArr = [];
  let set = new Set();
  for (let num of arr) {
    if (set.has(num)) ansArr.push(num);
    else set.add(num);
  }
  console.log(arr);
  return ansArr;
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));

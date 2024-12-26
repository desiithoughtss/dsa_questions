// takes O(n) Time and O(n) Space
var runningSum = function (nums) {
  let newArr = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    newArr.push(sum);
  }
  return newArr;
};


// takes O(n) Time and O(1) Time and this is in ts
// function runningSum(nums: number[]): number[] {
//     for(let i: number = 1; i < nums.length; i++){
//         nums[i] = nums[i] + nums[i-1]
//     }
//     return nums
// };
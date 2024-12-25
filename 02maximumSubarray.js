var maxSubArray = function (nums) {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

// this is the in the O(n**2)
// need to work on the kadane's algo

var maxSubArray = function (nums) {
  let sum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    maxSum = Math.max(sum, maxSum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};

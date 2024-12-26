// this is done in O(n x m)
var maximumWealth = function (accounts) {
  let maxSum = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum = sum + accounts[i][j];
    }

    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
};

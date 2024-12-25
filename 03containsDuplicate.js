// this is O(n**2)
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// this is in O(nlogn)
nums.sort();
for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] === nums[i + 1]) {
    return true;
  }
}
return false;

// this is in O(n)
let newSet = new Set(nums);
return newSet.size !== nums.length ? true : false;

// python solution in O(n)
/* def containsDuplicate(self, nums):
    return len(nums) != len(set(nums))
 */

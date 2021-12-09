/*Example 1:
  Input: nums1 = [1,3], nums2 = [2]
  Output: 2.00000
  Explanation: merged array = [1,2,3] and median is 2. */

function getMedian(ar1, ar2, n, m) {
  let i = 0;
  let j = 0;
  let count;
  let m1 = -1;
  let m2 = -1;

  if ((m + n) % 2 == 1) {
    for (count = 0; count <= (n + m) / 2; count++) {
      if (i != n && j != m) {
        m1 = ar1[i] > ar2[j] ? ar2[j++] : ar1[i++];
      } else if (i < n) {
        m1 = ar1[i++];
      } else {
        m1 = ar2[j++];
      }
    }
    return m1;
  } else {
    for (count = 0; count <= (n + m) / 2; count++) {
      m2 = m1;
      if (i != n && j != m) {
        m1 = ar1[i] > ar2[j] ? ar2[j++] : ar1[i++];
      } else if (i < n) {
        m1 = ar1[i++];
      } else {
        m1 = ar2[j++];
      }
    }
    return (m1 + m2) / 2;
  }
}

let nums1 = [1, 3];
let nums2 = [2];

let n1 = nums1.length;
let n2 = nums2.length;

document.write("Output: " + getMedian(nums1, nums2, n1, n2) + "<br />");
document.write("Time Complexity: O(m + n)" + "<br />"); // To merge both the arrays O(m+n) time is needed
document.write("Space Complexity: O(1)" + "<br />"); // No extra space is required

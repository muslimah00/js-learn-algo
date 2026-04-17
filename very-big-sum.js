function aVeryBigSum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i];  // Add each element to the sum
    }
    return sum;  // Return the total sum
}

// Test it!
const bigNumbers = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const result = aVeryBigSum(bigNumbers);
console.log(result);  // Output: 5000000015
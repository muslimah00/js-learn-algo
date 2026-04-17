function compareTriplets(a, b) {
    let aliceScore = 0;  // Alice's points
    let bobScore = 0;    // Bob's points
    
    // Compare each of the 3 scores
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceScore = aliceScore + 1;  // Alice gets a point
        } else if (a[i] < b[i]) {
            bobScore = bobScore + 1;      // Bob gets a point
        }
        // If equal, nobody gets anything
    }
    
    return [aliceScore, bobScore];  // Return both scores
}

// Test it!
const alice = [5, 6, 7];
const bob = [3, 6, 10];
const result = compareTriplets(alice, bob);
console.log(result);  // Output: [1, 1]
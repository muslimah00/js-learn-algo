function simpleArraySum(ar) {
    let total = 0;
    for(let i = 0; i < ar.length; i++) {
        total = total + ar[i];
    }
    return total;
}

// Test
const myNumbers = [1, 2, 3, 4, 10, 11];
const answer = simpleArraySum(myNumbers);
console.log(answer);  // This will show 31
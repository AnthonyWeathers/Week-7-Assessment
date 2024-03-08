const hasUniqueChars = word => {
    for (let i = 0; i < word.length - 1; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false
            }
        }
    }
    return true
}
// runtime is O(n^2) as both for loops largely uses the length of the input word array

// space complexity is O(1) since the for loops using length of the array but no new variables or arrays are being created

console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars('Moonday'))
console.log(hasUniqueChars('Bob'))
console.log(hasUniqueChars('Tom'))
console.log(hasUniqueChars('homemade'))
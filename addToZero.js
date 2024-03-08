const addToZero = array => {
    if(array.length === 0) {
        return false
    }
    for(let i = 0; i < array.length - 1; i++) {
        for(let j = i; j < array.length; j++) {
            if(array[i] + array[j] === 0) {
                return true
            }
        }
    }
    return false
}  
// space complexity is O(1) as no new variables/arrays are being made

console.log(addToZero([]))
// -> False

console.log(addToZero([1]))
// -> False

console.log(addToZero([1, 3, 7, 4, -3]))
// -> False

console.log(addToZero([1, 2, 3, 4, -1]))
// -> True
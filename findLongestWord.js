const findLongestWord = words => {
    let longest = 0
    for(let i = 0; i < words.length; i++) {
        if(words[i].length > longest) {
            longest = words[i].length
        }
    }
    return longest
}
// space complexity is O(1) as only variable longest takes up space

console.log(findLongestWord(["hi", "hello", "good morning", "greetings", "lovely day today"]))
// -> 5
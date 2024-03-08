const isPangram = sentence => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    sentence = sentence.toLowerCase();
    
    for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        
        if (sentence.indexOf(letter) === -1) {
            return false;
        }
    }
    return true;
}

// runtime is O(n) as toLowerCase goes through the whole sentence to convert it to all lowercase

// space complexity is O(1) as all initialized variables are not scaling in size due to input

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// -> True

console.log(isPangram("I like cats, but not mice"))
// -> False
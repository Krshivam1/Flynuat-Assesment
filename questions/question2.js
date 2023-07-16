const findLongestChain = (word) => {
    let longestChain = 0;
    let currentChain = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i + 1]) {
            currentChain++;
            if (currentChain > longestChain) {
                longestChain = currentChain;
            }
        } else {
            currentChain = 0;
        }
        console.log(currentChain, longestChain);
    }
    return longestChain;
};

const word = "00000111110101001111100001001";
const longestChain = findLongestChain(word);
console.log(longestChain); // OUTPUT - 4
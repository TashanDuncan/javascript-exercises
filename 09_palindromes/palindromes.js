const palindromes = function (string) {
  //create array of each letter removing punctuation
  const noPunctuation = string
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ");

  const word = noPunctuation.split("").filter((entry) => entry.trim() != "");

  console.log(word);

  //create a new array which is reverse of the original.
  const revWord = [...word].reverse();
  console.log(revWord);

  for (let i = 0; i < word.length; ++i) {
    if (word[i] !== revWord[i]) return false;
  }
  return true
};

console.log(palindromes('ZZZZ car, a man, a maraca.'))

// Do not edit below this line
module.exports = palindromes;

function sentenceToUpperCase(str) {
  const words = str.split(' ');
  if (words.length === 1) {
    return words[0].toUpperCase();
  } 
  return words.map((word, index) => {
    if (index % 2 === 0) {
      return word;
    }
    return word.toUpperCase();
  }).join(' ');
}

module.exports = sentenceToUpperCase;


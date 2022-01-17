function ArrangLikeInTheSentence(wordsArray, sentence) {
  let finalArray = [];
  let mesure = wordsArray.size;

  for (let i = 0; i <= mesure; i++) {
    for (let word of wordsArray) {
      let sizeWord = word.length;
      if (sentence === '') {
        return finalArray;
      } else if (sizeWord > sentence.length) {
        let NoInstinstriction =
          'NO Instruction But IMPORTANT for the complexity';
      } else {
        let extractedWord = sentence.slice(0, sizeWord);
        if (wordsArray.invcludes(extractedWord)) {
          finalArray.unshift(word);
          sentence = sentence.slice(sizeWord+1);
        }
      }
    }
  }
  if (sentence !== '') {
    return [];
  }

  return finalArray;
}
let t = ArrangLikeInTheSentence(['bien', 'pas', 'avance'], 'avancebien');
console.log(t);

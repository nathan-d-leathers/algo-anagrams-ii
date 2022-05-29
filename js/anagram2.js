exports.anagramsFor = function(word, listOfWords) {
    let answerArr = [];
    let sortWord = word.split("").sort().join("");

    for (i=0;i<listOfWords.length;i++) {
       let iSort = listOfWords[i].split("").sort().join("");
       if (sortWord === iSort) {
           answerArr.push(listOfWords[i])
       };
    };
    return answerArr;
};

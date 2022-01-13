const OriginalWords = (wordsArray,sentence,end,finalArray) => {

  if(finalArray.length > wordsArray.length || sentence === ""){return finalArray;}
  
  
  else{
  
      while(end >= 0){
       
           for(let word of wordsArray){
               let size = word.length;
               let extractedWord = sentence.slice(0,size);
             
               if(extractedWord == word){
                 
                  finalArray.unshift(word);
                  wordsArray = wordsArray.filter(function (f){return f !== word;});
                  sentence = sentence.slice(size);
                 
                  OriginalWords(wordsArray,sentence,wordsArray.length,finalArray)
        
                }
             
               else{
                  wordsArray = wordsArray.filter(function (f){return f !== word;});
                  wordsArray.push(word);
        
                 OriginalWords(wordsArray,sentence,end-1,finalArray)
                }
                
            }
            
      }
  
    }

}

let t = OriginalWords(['bien','pas','avance'],'avancebien',3,[]);
console.log(t)

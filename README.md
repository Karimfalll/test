OriginalWords is a fucntion when given a array of strings ,a sentence it's return a another array of strings in the Original ordre of the sentence .
the functions have 4 paramater , the list of the word , the length of the list (it help to stop the recussivity)  the sentence and the final array which is empty on the beginin ;


OriginalWords (['star','an',born','was''],'ansstartwasborn',4,[])

extraction from the sentence of a word of size equal of the first word in the array : 
size(star) = 4 then extractzord = 'ansta'
comparaison:
when the comparaison is false ('star' != 'anstr' ) push the word  in the end of the a and list and repeat
new array ['an','born','was','star']
extraction-> 'an' 
when the comparaison is true ('an'='an' ) true then delete from this the word from the list  and form the sentence 
then put it in first place in the final array which'll be returned 
final array = ['an'] array initial ['born','was','start'] recall the function with thos paramatere 



IN THE DIFFRENTS BRACHANS YOU CAN FIND 2 DIFFERENTS IMPLEMENTATION FOR THE ASKED FUNCTION JAVA(OOB) and Js(function).
OriginalWords() or ArrangeLikeIntheSentence is a fucntion when given a array of strings and a sentence it's return  another array of strings in the Original ordre of the sentence .

My first approch was recussive; that why i did some commit later ;
Althoug the recussive was working it's consuming more time o(n!) basiclly
this object and functionnal approch is approximatly O(n*n) when  n is the size of the given array.


Let explian the function with an a example :

OriginalWords (['star','a',born','was''],'astarwasborn')

it's start whith a loop of n size which correspond to the n element of the array ; for anytime time that it's goes in the loop 
it do another loop on the array :
for the second loop it takes each time an elememnt  of the array
1ER loop i = 1:
  2eme loop : 
  "star"
  then with the size of this string taken it's extracted a string from the givien sentence : "star" -> "asta"
  it's try to find the extractword in the giveen array. 
  if it found it  put it the final array that will be retuned in the end
  othwerse it's contunie with the second string in the array : "asta" is not the array. 
  Continue with
  "a";
  "a" match "a" in the sentence 
  founding "a" in the array  : add "a" to the finalArray ["a] and take it  out from the sentence it's become "starwasbor"
  then the string match:  "born" -> "star"....
  "star" is in the array; so finalArray = ["a","star"] sentence = "wasborn";
                           "was"->"was" 
   "was" is in the array ; so finalArray  = ["a","star","was"] sentence = "born";
   since the it did all the element in the array , and the finalArray is not complete yet it's go to second loop:
  i = 2:
  same process 
  "star" -> "born" 
  "born" is in the array ; so finalArray  = ["a","star","was","born"] and the sentence = "";and since the sentence is empty the finalArray is complete;
  
  
  
  conclusion:
  This might be a very modest algorithm but it's working comletely and is it's less consumming compere to most others, like the dictionner breaker for exemple .
  Of course i had to take care about the small expection in the implemention so the funtion can work for all the cases .

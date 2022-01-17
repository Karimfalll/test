package com.company;

import java.util.*;

public class ArrayOriginalSentence {
    private String sentence = "";
    private List<String> originalArray = new ArrayList<>();
    private int taille = 0;


    public ArrayOriginalSentence(List<String> originalArray, String sentence) {

        this.originalArray = originalArray;
        this.sentence = sentence;
        this.taille = originalArray.size();
    }

    public List<String> ArrangeLikeIntheSentence() {


        List<String> finalArray = new ArrayList<>();
        int mesure = getTaille();


        for(int i = 0; i<= mesure; i++){
            for (String word : originalArray) {

                int longer = word.length();
                if(sentence == ""){ return finalArray;}
                else if (longer > sentence.length()) {
                    String noInstruction = "NO INSTRUCTION";

                } else {

                    String extractWord = sentence.substring(0, longer);

                    if (originalArray.contains(extractWord)) {
                        finalArray.add(extractWord);
                        sentence = sentence.substring(longer);



                    }
                }
            }
        }
        if(sentence!="") {
            finalArray = new ArrayList<>();
        }
        return finalArray;


    }

    public List<String> getOriginalArray() {
        return this.originalArray;
    }

    public int getTaille() {
        return this.taille;
    }

}









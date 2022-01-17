package com.company;
import java.util.*;

public class Main {

    public static void main(String[] args) {

        String sentence = "tanbienbordeelpasfgf";
        List<String> l = new ArrayList<>();
        l.add("bien");
        l.add("pas");
        l.add("fgf");
        l.add("bordeel");
        l.add("tan");


        ArrayOriginalSentence A = new ArrayOriginalSentence(l,sentence);
        List<String> ll = A.ArrangeLikeIntheSentence();

        for (String elem:ll) {
                System.out.println(elem);

        }
        //



 }
}
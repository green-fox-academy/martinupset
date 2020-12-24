package com.company;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class _01 {
    public static void main(String[] args) {
        List<Integer> numbersListOne = Arrays.asList(1, 3, -2, -4, -7, -3, -8, 12, 19, 6, 9, 10, 14);
        System.out.println(numbersListOne.stream().filter((number)->number%2 == 0).collect(Collectors.toList()));

        List<Integer> numbersTwo = Arrays.asList(1, 3, -2, -4, -7, -3, -8, 12, 19, 6, 9, 10, 14);
        System.out.println(numbersTwo.stream().filter((number)->number>0).map(number -> number*number).collect(Collectors.toList()));

        List<Integer> numbersThree = Arrays.asList(3, 9, 2, 8, 6, 5);
        System.out.println(numbersThree.stream().filter((number)->number>20).map(number -> number * number).collect(Collectors.toList()));

        // exercise 4 - average value of the odd numbers
        List<Integer> numbersFour = Arrays.asList(1, 3, -2, -4, -7, -3, -8, 12, 19, 6, 9, 10, 14);
        System.out.println(numbersFour.stream().filter((number)->number%2 == 1 || number%2 == -1)
                .mapToInt(number -> Integer.parseInt(number.toString())).summaryStatistics().getAverage());
        //WORKS!

        List<Integer> numbersFive = Arrays.asList(5, 9, 1, 2, 3, 7, 5, 6, 7, 3, 7, 6, 8, 5, 4, 9, 6, 2);
        System.out.println(numbersFive.stream().filter((number)->number%2 == 1 || number%2 == -1)
                .mapToInt(number -> Integer.parseInt(number.toString())).summaryStatistics().getSum());

        String six = "aAcoPYdte";
        System.out.println(six.chars().filter(c -> c>64 && c <97).mapToObj(c -> Character.toString((char)c)).collect(Collectors.joining()));

        seven("N");

        List<String> cities = Arrays.asList("ROME", "LONDON", "NAIROBI", "CALIFORNIA", "ZURICH", "NEW DELHI", "AMSTERDAM", "ABU DHABI", "PARIS");
        String eighth = cities.stream().map(String::valueOf).collect(Collectors.joining(","));
        System.out.println(eighth);

        Map<Character,Integer> frequencies = eighth.replaceAll(",","").chars().boxed().collect(Collectors.toMap(
                k -> Character.valueOf((char)k.intValue()),
                v->1,
                Integer::sum));
        System.out.println(frequencies);

        List<Fox> foxArray = Arrays.asList(new Fox("aa","green",2),
                new Fox("bb", "blue",8),
                new Fox("cc", "purple", 4),
                new Fox("dd", "white", 6),
                new Fox("ee", "yellow", 5));

        List<Fox> greenArray = foxArray.stream().filter(fox -> fox.color == "green").collect(Collectors.toList());
        List<Fox> lessArray = foxArray.stream().filter(fox -> fox.color == "green" && fox.age <5).collect(Collectors.toList());
        Map<String,Integer> frequentArray = foxArray.stream().collect(Collectors.toMap(k-> k.color,v->1,Integer::sum));
        System.out.println(frequentArray);
        printer(greenArray);
        printer(lessArray);
    }

    public static void printer(List<Fox> array){
        for (int i = 0; i < array.size(); i++){
            System.out.println(array.get(i).name);
        }
    }


    public static void seven(String start){
        List<String> cities = Arrays.asList("ROME", "LONDON", "NAIROBI", "CALIFORNIA", "ZURICH", "NEW DELHI", "AMSTERDAM", "ABU DHABI", "PARIS");
        System.out.println(cities.stream().filter(city -> city.startsWith(start)).collect(Collectors.toList()));
    }
}

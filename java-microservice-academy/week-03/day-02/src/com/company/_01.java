package com.company;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class _01 {
    public static void main(String[] args) {
        List<Integer> numbersListOne = Arrays.asList(1, 3, -2, -4, -7, -3, -8, 12, 19, 6, 9, 10, 14);
        System.out.println(numbersListOne.stream().filter((number)->number%2 == 0).collect(Collectors.toList()));

        List<Integer> numbersTwo = Arrays.asList(1, 3, -2, -4, -7, -3, -8, 12, 19, 6, 9, 10, 14);
        System.out.println(numbersTwo.stream().filter((number)->number>0).map(number -> number*number).collect(Collectors.toList()));

        List<Integer> numbersThree = Arrays.asList(3, 9, 2, 8, 6, 5);
        System.out.println(numbersThree.stream().filter((number)->number>20).map(number -> number * number).collect(Collectors.toList()));

        List<Integer> numbersFour = Arrays.asList(1, 3, -2, -4, -7, -3, -8, 12, 19, 6, 9, 10, 14);
        System.out.println(numbersFour.stream().filter((number)->number%2 == 1 || number%2 == -1));
    }
}

package com.company._01;

import java.util.Arrays;
import java.util.Collections;

public class SortTheArray {
    public static void main(String[] args) {
        Double[] array = {2.3,4.5,6.6};
        Double[] array1 = sort(array);
        for (double e : array1){
            System.out.println(e);
        }
    }

    public static <T extends Number> T[] sort(T[] par){
          Arrays.sort(par, Collections.reverseOrder());
          return par;
    }
}

package com.company._02;

public class SumTheArray {
    public static void main(String[] args){
        Integer[] array= {1,2,3,4,5,6};
        System.out.println(sum(array, 3));
    }

    public static <T extends Number> int sum(T[] arr, int length){
        int sum = 0;
        int trueLength = arr.length > length ? length:arr.length;
        for (int i = 0; i < trueLength;i++){
            sum += arr[i].intValue();
        }
        return sum;
    }
}

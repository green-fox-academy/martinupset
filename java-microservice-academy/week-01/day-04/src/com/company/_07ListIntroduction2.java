package com.company;
import java.util.ArrayList;
import java.util.Arrays;

public class _07ListIntroduction2 {
    public static void main(String[] args) {
        ArrayList<String> ListA = new ArrayList<>();
        ListA.add("Apple");
        ListA.add("Avocado");
        ListA.add("Blueberries");
        ListA.add("Durian");
        ListA.add("Lychee");

        ArrayList<String> ListB = new ArrayList<>();
        ListB.addAll(ListA);
        System.out.println(ListA.contains("Durian"));

        ListB.remove("Durian");
        ListA.add(4, "Kiwifruit");

        if(ListA.size() > ListB.size()){
            System.out.println(">");
        }
        else if (ListA.size() < ListB.size()){
            System.out.println("<");
        }
        else{
            System.out.println("=");
        }

        System.out.println(ListA.indexOf("Avocado"));
        System.out.println(ListB.indexOf("Durian"));

        ListB.addAll(Arrays.asList("Passion Fruit", "Pomelo"));
        System.out.println(ListA.get(2));

    }
}

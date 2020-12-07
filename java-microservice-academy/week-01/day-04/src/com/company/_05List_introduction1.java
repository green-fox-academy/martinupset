package com.company;
import java.util.ArrayList;
import java.util.Collections;

public class _05List_introduction1 {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        System.out.println(names.size());

        names.add("William");
        System.out.println(names.isEmpty());
        names.add("John");
        names.add("Amanda");
        System.out.println(names.size());
        System.out.println(names.get(2));

        for(String name: names) System.out.println(name);
        names.forEach((e) -> {
            System.out.println(String.valueOf(names.indexOf(e) + 1) + '.' + e);
        });
        names.remove(1);
        Collections.reverse(names);
        names.forEach((e) -> {
            System.out.println(e);
        });
        names.clear();
    }
}

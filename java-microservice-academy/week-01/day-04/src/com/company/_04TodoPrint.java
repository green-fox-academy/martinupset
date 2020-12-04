package com.company;

public class _04TodoPrint {
    public static void main(String... args){
        String todoText = " - Buy milk\n";
        StringBuilder builder = new StringBuilder(todoText);
        todoText = builder.insert(0, "My todo:\n").toString();
        StringBuilder builder2 = new StringBuilder(todoText);
        todoText = builder2.insert(todoText.indexOf("milk   ")+4," - Download games\n").toString();
        StringBuilder builder3 = new StringBuilder(todoText);
        todoText = builder3.insert(todoText.indexOf("game")+4, " - Diablo").toString();
        // Add "My todo:" to the beginning of the todoText
        // Add " - Download games" to the end of the todoText
        // Add " - Diablo" to the end of the todoText but with indention

        // Expected output:

        // My todo:
        //  - Buy milk
        //  - Download games
        //      - Diablo

        System.out.println(todoText);
    }
}

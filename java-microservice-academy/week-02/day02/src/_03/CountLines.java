package _03;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class CountLines {
    public static void main(String[] args){
        System.out.println(count("5"));
    }
    public static int count(String name) {
        try{
            Path filePath = Paths.get(name);
            List<String> lines = Files.readAllLines(filePath, StandardCharsets.UTF_8);
            return lines.size();
        }catch(IOException e){
            return 0;
        }
    }
}
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
package _04;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.nio.file.StandardOpenOption;

public class WriteSingleLine {
    public static void main(String[] args) {
        Path wirteFilePath = Paths.get("assets/my-file.txt");
        String name = '\n' + "myname";
        try {
            Files.writeString(wirteFilePath, name, StandardOpenOption.APPEND);
        }catch (IOException e) {
            System.out.println("Unable to write file: my-file.txt");
        }
        // Write a function that is able to manipulate a file
        // By writing your name into it as a single line
        // The file should be named "my-file.txt"
        // In case the program is unable to write the file,
        // It should print the following error message: "Unable to write file: my-file.txt"
    }
}

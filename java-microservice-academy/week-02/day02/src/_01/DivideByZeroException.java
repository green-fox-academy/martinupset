package _01;

public class DivideByZeroException extends RuntimeException {
    public DivideByZeroException() {

    }

    public DivideByZeroException(String message) {
        super(message);
    }
}

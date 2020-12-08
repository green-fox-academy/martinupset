package _01;

public class DivideByZero {
    public static void main(String[] args) {
        try {
            DivideByZero(100);
            DivideByZero(0);
            DivideByZero(50);
            //hi,mentor, why this whole block will not excute?
        }catch(DivideByZeroException e){
            System.out.println(e);
        }
        finally {
            System.out.println("aaa");
        }

    }

    public static int DivideByZero (int par){
        if (par == 0) {
            throw new DivideByZeroException("fail");
        }
        return par/10;
    }
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print "fail" if the parameter is 0
}

package com.company;

class miao implements CCC{
    public static void main(String[] args) {
        System.out.println(BBB.NUM);
    }
}

interface AAA {
    default void bbb(){
        System.out.println("bbb");
    }
    static int NUM = 10;
}

interface BBB {
    default void bbb(){
        System.out.println("bbb");
    }
    static int NUM =20;
}

interface CCC extends AAA,BBB {
    default void aaa() {
        System.out.println("aaaa");
    }

    @Override
    default void bbb() {
        System.out.println("pppp");
    }
}

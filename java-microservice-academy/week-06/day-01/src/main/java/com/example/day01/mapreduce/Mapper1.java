package com.example.day01.mapreduce;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapred.MapReduceBase;
import org.apache.hadoop.mapred.Mapper;
import org.apache.hadoop.mapred.OutputCollector;
import org.apache.hadoop.mapred.Reporter;

import java.io.IOException;
import java.util.StringTokenizer;


public class Mapper1 extends MapReduceBase implements Mapper<LongWritable, Text, Text, IntWritable> {
    private final static IntWritable one = new IntWritable(1);
    private Text word = new Text();
    @Override
    public void map(LongWritable key, Text value, OutputCollector<Text, IntWritable> output, Reporter reporter) throws IOException {
        String line = value.toString();
        StringTokenizer st = new StringTokenizer(line);
        while (st.hasMoreTokens()) {
            boolean isUpperCase = true;
            if(word.charAt(word.getLength() - 1) == '.'){
                for (int i = 0; i < word.getLength() - 1; i++){
                    if (Character.isLowerCase(word.charAt(i))){
                        isUpperCase = false;
                        break;
                    }
                }
            }

            if (isUpperCase){
                word.set(st.nextToken());
                output.collect(word, one);
            }
        }
    }
}

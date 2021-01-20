package com.example.day01.mapreduce;

import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapred.*;

import java.io.IOException;

public class JobMain {
    public void run() throws IOException {
        JobConf conf = new JobConf(JobConf.class);
        conf.setJobName("shakespear");

        conf.setOutputKeyClass(Text.class);
        conf.setOutputValueClass(IntWritable.class);

        conf.setMapperClass(Mapper1.class);
        conf.setCombinerClass(Reducer1.class);
        conf.setReducerClass(Reducer1.class);

        conf.setInputFormat(TextInputFormat.class);
        conf.setOutputFormat(TextOutputFormat.class);

        FileInputFormat.setInputPaths(conf,new Path("hdfs://localhost:9000/wordcount/t8.shakespeare.txt"));
        FileOutputFormat.setOutputPath(conf,new Path("hdfs://localhost:9000/test_out/result3.txt"));

        JobClient.runJob(conf);

    }
}

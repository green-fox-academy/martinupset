package com.example.project1.controller;

import com.example.project1.model.Post;
import com.example.project1.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController {
    private PostRepository postRepository;

    @Autowired
    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping
    public List<Post> getPost(){
        return (List<Post>) postRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Post> addPost(@RequestBody Post post){
        Post addedPost = postRepository.save(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedPost);
    }

    @PutMapping("{id}/upvote")
    public ResponseEntity<Post> upvote(@PathVariable("id") long id) {
        Optional<Post> post = postRepository.findById(id);
        if (!post.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        else{
            post.get().setScore(post.get().getScore() + 1);
            Post result = postRepository.save(post.get());
            return ResponseEntity.ok(result);
        }
    }

    @PutMapping("{id}/downvote")
    public ResponseEntity<Post> downvotePost(@PathVariable("id") long id) {
        Optional<Post> postToUpvote = postRepository.findById(id);
        if (!postToUpvote.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        postToUpvote.get().setScore(postToUpvote.get().getScore() - 1);
        Post upVotedPost = postRepository.save(postToUpvote.get());
        return ResponseEntity.ok(upVotedPost);
    }

}

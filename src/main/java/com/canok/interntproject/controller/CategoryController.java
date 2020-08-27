package com.canok.interntproject.controller;

import com.canok.interntproject.model.Category;
import com.canok.interntproject.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;


@RestController
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;


    @GetMapping("/categories")
    public List<Category> getCategories()
    {
        return categoryRepository.findAll();
    }


    @GetMapping(path = "/category/{id}")
    public ResponseEntity<?> getCategory(@PathVariable Long id)
    {
        Optional<Category> category=categoryRepository.findById(id);

        return category.map(response-> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>((HttpStatus.NOT_FOUND)));
    }
    @PostMapping(path = "/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category category) throws URISyntaxException
    {
        Category newCategory=categoryRepository.save(category);

        return ResponseEntity.created(new URI("/category"+newCategory.getId())).body(newCategory);
    }

    @PutMapping(path="category/{id}")
    public ResponseEntity<Category> updateCategory(@RequestBody Category category)
    {
        Category updatedCategory=categoryRepository.save(category);
        return ResponseEntity.ok().body(updatedCategory);

    }

    @DeleteMapping(path = "category/{id}")
    public ResponseEntity<Category> deleteCategory(@PathVariable Long id)
    {
        categoryRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}

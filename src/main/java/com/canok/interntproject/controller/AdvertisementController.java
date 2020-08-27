package com.canok.interntproject.controller;

import com.canok.interntproject.model.Advertisement;
import com.canok.interntproject.repository.AdvertisementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
public class AdvertisementController {

    @Autowired
    AdvertisementRepository expenseRepository;

    @GetMapping(path= "/advertisements")
    public List<Advertisement> getAdv()
    {
        return expenseRepository.findAll();
    }

    @DeleteMapping(path = "/advertisements/{id}")
    public ResponseEntity<?> deleteAdv(@PathVariable Long id)
    {
        expenseRepository.deleteById(id);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/advertisements")
    public ResponseEntity<?> updateEnxpense(@RequestBody Advertisement advertisement) throws URISyntaxException
    {
        Advertisement updatedAdvertisement =expenseRepository.save(advertisement);

        return ResponseEntity.created(new URI("/advertisements"+ updatedAdvertisement.getId())).body(updatedAdvertisement);
    }

}

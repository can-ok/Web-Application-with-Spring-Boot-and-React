package com.canok.interntproject.controller;

import com.canok.interntproject.model.WorkingType;
import com.canok.interntproject.repository.WorkingTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WorkingController {
    @Autowired
    WorkingTypeRepository workingTypeRepository;

    @GetMapping(path ="/workingtypes")
    public List<WorkingType> getWorkingTypse()
    {
        return workingTypeRepository.findAll();
    }
}

package com.lpa.tasks.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(TaskController.BASE_URL)
public class TaskController {
    public static final String BASE_URL = "/api/tasks";
}

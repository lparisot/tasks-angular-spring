package com.lpa.tasks.controllers;

import com.lpa.tasks.domain.Task;
import com.lpa.tasks.services.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(TaskController.BASE_URL)
public class TaskController {
    public static final String BASE_URL = "/api/tasks";

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> listTasks() {
        return taskService.list();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task) {
        return taskService.save(task);
    }
}

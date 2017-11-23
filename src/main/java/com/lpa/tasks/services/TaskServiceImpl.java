package com.lpa.tasks.services;

import com.lpa.tasks.domain.Task;
import com.lpa.tasks.repositories.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {
    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> list() {
        return taskRepository.findAll();
    }

    @Override
    public Task save(Task task) {
        return taskRepository.save(task);
    }
}


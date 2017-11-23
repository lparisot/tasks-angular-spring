package com.lpa.tasks.services;

import com.lpa.tasks.domain.Task;

public interface TaskService {
    Iterable<Task> list();
}

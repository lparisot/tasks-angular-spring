import { Component, OnInit } from '@angular/core';

import { Task } from 'app/tasks/task.model';
import { TaskService } from 'app/tasks/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];
  errMess: string;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService
      .getTasks()
      .subscribe(tasks => this.tasks = tasks, errmess => this.errMess = <any>errmess);
  }

  getDueDateLabel(task: Task) {
    return task.completed ? 'label-success' : 'label-primary';
  }

  onTaskChange(event, task) {
    //this.taskService.saveTask(task, event.target.checked).subscribe();
  }
}

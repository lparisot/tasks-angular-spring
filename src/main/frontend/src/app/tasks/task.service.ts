import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Task } from 'app/tasks/task.model';

@Injectable()
export class TaskService {
  onTaskAdded = new EventEmitter<Task>();

  constructor(private restangular: Restangular) {

  }

  getTasks(): Observable<Task[]> {
    return this.restangular.all('tasks').getList();
  }

  saveTask(task: Task, checked: boolean) {
    task.completed = checked;
    return this.restangular.all('tasks').post(task);
  }

  addTask(task: Task) {
    return this.restangular.all('tasks').post(task);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Task } from 'app/tasks/task.model';

@Injectable()
export class TaskService {
  constructor(private restangular: Restangular) {

  }

  getTasks(): Observable<Task[]> {
    return this.restangular.all('tasks').getList();
  }
}

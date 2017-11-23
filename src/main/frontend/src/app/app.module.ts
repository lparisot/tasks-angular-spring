import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RestangularModule } from 'ngx-restangular';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskAddComponent } from './tasks/task-add/task-add.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';

import { baseURL } from 'app/shared/baseurl';
import { RestangularConfigFactory } from 'app/shared/restconfig';

import { TaskService } from 'app/tasks/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskAddComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    { provide: 'BaseURL', useValue: baseURL },
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

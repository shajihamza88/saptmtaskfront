import { MaterialModule } from './../material/material.module';
import { TaskEffects } from './../task/store/task..effects';
import { TaskService } from './../task/services/task.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TasksListComponent } from './component/tasks-list/tasks-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { taskReducer } from './../task/store/task..reducers';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { UpdateTaskComponent } from './component/update-task/update-task.component';

@NgModule({
  declarations: [TasksListComponent, CreateTaskComponent, UpdateTaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('tasks', taskReducer),
    EffectsModule.forFeature([TaskEffects]),
    MaterialModule,
  ],
  providers: [TaskService],
  bootstrap: [],
  exports: [TasksListComponent, CreateTaskComponent],
})
export class TaskModule {}

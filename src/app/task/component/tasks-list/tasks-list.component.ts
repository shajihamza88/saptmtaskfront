import { UpdateTaskComponent } from './../update-task/update-task.component';
import { getAllTasks } from './../../store/task.selectors';
import { taskActionTypes } from './../../store/task.actions';
import { AppState } from './../../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from './../../model/task.model';
import { TaskService } from './../../services/task.services';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent implements OnInit {
  tasks$?: Observable<Task[]>;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  ngOnInit() {
    this.tasks$ = this.store.select(getAllTasks);
  }

  deleteTask(taskId: string) {
    this.store.dispatch(taskActionTypes.deleteTask({ taskId }));
  }

  openDialogModal(task) {
    console.log(task);
    this.dialog.open(UpdateTaskComponent, { data: task });
  }
}

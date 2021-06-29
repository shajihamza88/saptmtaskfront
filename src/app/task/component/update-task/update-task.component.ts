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
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  errorMsg = '';

  data = {
    task: Object.assign({}, this.updateData),
  };

  constructor(
    private store: Store<AppState>,
    private dialogRef: MatDialogRef<UpdateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public updateData: any
  ) {}

  ngOnInit(): void {}

  updateTask(updateForm) {
    let statusData = updateForm.value.status;
    statusData = statusData.toUpperCase();
    const now = new Date();
    const today = moment(now).format('YYYY-MM-DD');
    const dueDateData = moment(updateForm.value.due_date).format('YYYY-MM-DD');
    if (statusData === 'DONE')
      if (moment(dueDateData).isBefore(today)) {
        this.errorMsg = 'Due date already passed';
        return;
      } else this.errorMsg = '';

    const update: Update<Task> = {
      id: this.updateData!.id,
      changes: {
        ...this.updateData,
        ...updateForm.value,
      },
    };

    console.log(update);

    this.store.dispatch(taskActionTypes.updateTask({ update }));
    this.dialogRef.close();
  }
}

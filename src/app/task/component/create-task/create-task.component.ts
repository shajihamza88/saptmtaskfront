import { Task } from './../../model/task.model';
import { createTask } from './../../store/task.actions';
import { AppState } from './../../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
})
export class CreateTaskComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onSubmit(submittedForm) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }

    const task: Task = {
      id: '',
      title: submittedForm.value.title,
      description: submittedForm.value.description,
      status: submittedForm.value.status,
      due_date: submittedForm.value.due_date,
    };
    this.store.dispatch(createTask({ task }));
  }
}

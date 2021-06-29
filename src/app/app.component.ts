import { CreateTaskComponent } from './task/component/create-task/create-task.component';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tmfrontend';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CreateTaskComponent);
  }
}

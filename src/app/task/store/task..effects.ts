import { taskActionTypes, tasksLoaded, updateTask } from './task.actions';
import { TaskService } from './../services/task.services';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TaskEffects {
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActionTypes.loadTasks),
      concatMap(() => this.taskService.getAllTasks()),
      map((tasks) => taskActionTypes.tasksLoaded({ tasks }))
    )
  );

  createTask$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(taskActionTypes.createTask),
        concatMap((action) => this.taskService.createTask(action.task)),
        tap(() => this.router.navigateByUrl('/tasks'))
      ),
    { dispatch: false }
  );

  deleteTask$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(taskActionTypes.deleteTask),
        concatMap((action) => this.taskService.deleteTask(action.taskId))
      ),
    { dispatch: false }
  );

  updateTask$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(taskActionTypes.updateTask),
        concatMap((action) =>
          this.taskService.updateTask(action.update.id, action.update.changes)
        )
      ),
    { dispatch: false }
  );

  constructor(
    private taskService: TaskService,
    private actions$: Actions,
    private router: Router
  ) {}
}

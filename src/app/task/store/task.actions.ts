import { Task } from './../model/task.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const loadTasks = createAction('[Tasks List] Load Tasks via Service');

export const tasksLoaded = createAction(
  '[Tasks Effect] Tasks Loaded Successfully',
  props<{ tasks: Task[] }>()
);

export const createTask = createAction(
  '[Create Tasks Component] Create Course',
  props<{ task: Task }>()
);

export const deleteTask = createAction(
  '[Tasks List Operations] Delete Course',
  props<{ taskId: string }>()
);

export const updateTask = createAction(
  '[Tasks List Operations] Update Course',
  props<{ update: Update<Task> }>()
);

export const taskActionTypes = {
  loadTasks,
  tasksLoaded,
  createTask,
  deleteTask,
  updateTask,
};

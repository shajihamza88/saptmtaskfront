import { TaskState } from './task..reducers';
import { Task } from './../model/task.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './task..reducers';

export const taskFeatureSelector = createFeatureSelector<TaskState>('tasks');

export const getAllTasks = createSelector(taskFeatureSelector, selectAll);

export const areTasksLoaded = createSelector(
  taskFeatureSelector,
  (state) => state.tasksLoaded
);

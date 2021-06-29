import { Task } from './../model/task.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { taskActionTypes, tasksLoaded } from './task.actions';

export interface TaskState extends EntityState<Task> {
  tasksLoaded: boolean;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState = adapter.getInitialState({
  tasksLoaded: false,
});

export const taskReducer = createReducer(
  initialState,

  on(taskActionTypes.tasksLoaded, (state, action) => {
    return adapter.addMany(action.tasks, { ...state, tasksLoaded: true });
  }),

  on(taskActionTypes.createTask, (state, action) => {
    return adapter.addOne(action.task, state);
  }),

  on(taskActionTypes.deleteTask, (state, action) => {
    return adapter.removeOne(action.taskId, state);
  }),

  on(taskActionTypes.updateTask, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();

import { Task } from './../model/task.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TaskService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/api/tasks');
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>('/api/tasks', task);
  }

  deleteTask(taskId: string): Observable<any> {
    return this.http.delete('/api/tasks/' + taskId);
  }

  updateTask(taskId: string | number, changes: Partial<Task>): Observable<any> {
    return this.http.patch('/api/tasks/' + taskId, changes);
  }

  getErrorMessage(message: string) {
    return message;
  }
}

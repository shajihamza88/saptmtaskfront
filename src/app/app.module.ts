import { MaterialModule } from './material/material.module';
import { CreateTaskComponent } from './task/component/create-task/create-task.component';
import { TaskResolver } from './task/task.resolver';
import { TasksListComponent } from './task/component/tasks-list/tasks-list.component';
import { EffectsModule } from '@ngrx/effects';
import { TaskModule } from './task/task.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes = [
  {
    path: 'tasks',
    component: TasksListComponent,
    resolve: {
      tasks: TaskResolver,
    },
  },
  { path: 'create-task', component: CreateTaskComponent },
  { path: '**', redirectTo: 'tasks' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TaskModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [TaskResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}

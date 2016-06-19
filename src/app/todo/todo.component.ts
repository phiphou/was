import {HTTP_PROVIDERS} from '@angular/http';
import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {TodoListComponent} from './todo-list.component';
import {TodoInputComponent} from './todo-input.component';
import {RestOptions, RestService} from '../shared/services/rest.service';

@Component({
  selector: 'todo',
  providers: [
    HTTP_PROVIDERS,
    RestOptions,
    RestService,
    TodoService
  ],
  directives: [TodoInputComponent, TodoListComponent],
  template: `
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <p>For this example we're using
          <a href="http://jsonplaceholder.typicode.com/" target="_blank">
            JSONPlaceholder - Fake Online REST API for Testing and Prototyping
          </a>.
        </p>
        <div *ngIf="!todoService.todos"><h1>loading</h1></div>
        <div>
        <todo-input></todo-input>
        <br>
        <todo-list></todo-list>
        </div>
      </div>
    </div>
  `
})
export class TodoComponent implements OnInit {
  title: string;

  public header = 'Todo';
  constructor(
    private todoService: TodoService
  ) { this.title = 'App title'; }
  ngOnInit() {
    console.log('Hello Home');
  }
}

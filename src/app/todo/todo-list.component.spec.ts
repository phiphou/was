import {
  it,
  inject,
  describe,
  beforeEachProviders
} from '@angular/core/testing';

// Load the implementations that should be tested
import { TodoListComponent } from './todo-list.component';
import {HTTP_PROVIDERS} from '@angular/http';
import { TodoService } from './todo.service';
import { RestService, RestOptions} from '../shared/services/rest.service';
//import {Http, Request, Response, RequestMethod, RequestOptions, BaseRequestOptions} from '@angular/http';

describe('Todo', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    TodoListComponent, TodoService, RestService, RestOptions,
      HTTP_PROVIDERS
  ]);


  it('should log ngOnInit', inject([TodoListComponent], (todoList) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    todoList.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello todoList');
  }));

});

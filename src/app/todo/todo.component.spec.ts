import {
  it,
  inject,
  describe,
  beforeEachProviders
} from '@angular/core/testing';

// Load the implementations that should be tested
import {HTTP_PROVIDERS} from '@angular/http';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { RestService, RestOptions} from '../shared/services/rest.service';
//import {Http, Request, Response, RequestMethod, RequestOptions, BaseRequestOptions} from '@angular/http';

describe('Todo', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    TodoComponent, TodoService, RestService, RestOptions,
    HTTP_PROVIDERS
  ]);


  it('should log ngOnInit', inject([TodoComponent], (home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello Home');
  }));

});

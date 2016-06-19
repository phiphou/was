import {Injectable} from '@angular/core';
// import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Response} from '@angular/http';
import {RestService} from '../shared/services/rest.service';
import {ITodo} from './todo.interface';

@Injectable()
export class TodoService {
  public todos: ITodo[] = null;

  constructor(private rest: RestService) { }

  fetch(): void {
    this.rest.read('/todos', { userId: 1 })
      .map((res: Response) => res.json())
      .subscribe(
      (todos: ITodo[]) => this.todos = todos,
      error => console.log('Could not load todos.')
      );
  }

  create(todo: ITodo): void {
    this.todos.unshift(todo);
    this.rest.create('/todos', todo)
      .subscribe(() => console.log('created!'));
  }

  update(todo: ITodo): void {
    this.rest.update(`/todos/${todo.id}`, todo)
      .subscribe(() => console.log('updated!'));
  }

  delete(todo: ITodo): void {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.rest.delete(`/todos/${todo.id}`)
      .subscribe(() => console.log('deleted!'));
  }
}

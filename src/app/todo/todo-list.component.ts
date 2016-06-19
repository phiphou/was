import {NgFor} from '@angular/common';
import {Component,OnInit} from '@angular/core';
import {ITodo} from './todo.interface';
import {TodoService} from './todo.service';
import {TodoItemComponent} from './todo-item.component';

@Component({
  selector: 'todo-list',
  directives: [NgFor, TodoItemComponent],
  template: `<ul>
           <li *ngFor="let todo of todoService.todos">
           <todo-item
             [todo]="todo"
           (delete)="delete(todo)"
           (update)="update(todo)">
           </todo-item>
           </li>
          </ul>`
})

export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoService) {
    this.todoService.fetch();
  }
  ngOnInit() {
    console.log('Hello todoList');
  }
  delete(todo: ITodo): void {
    this.todoService.delete(todo);
  }

  update(todo: ITodo): void {
    this.todoService.update(todo);
  }
}

import {NgIf} from '@angular/common';
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ITodo} from './todo.interface';
import {TruncatePipe} from '../shared/pipes/truncate.pipe';

@Component({
  selector: 'todo-item',
  directives: [NgIf],
  pipes: [TruncatePipe],
  template: `<div class="row todo-item" [ngClass]="{ completed: todo.completed }">
          <div class="large-1 columns">
          <input type="checkbox" class="todo-item-select" [(ngModel)]="todo.completed" (click)="update(todo)">
          </div>
            <div class="large-10 columns">
              <span class="todo-item-text" *ngIf="!editing" (click)="toggleEditState()">
                {{ todo.title  }}
              </span>
              <form *ngIf="editing" (ngSubmit)="submit(todo)">
                <input type="text" class="todo-item-input" [(ngModel)]="todo.title">
              </form>
            </div>
            <div class="large-1 columns">
              <button class="todo-item-delete button small alert" (click)="delete(todo)">Delete</button>
            </div>
          </div>`})

export class TodoItemComponent {

  @Input() todo: ITodo;
  @Output('delete') deleteEmitter: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output('update') updateEmitter: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  private editing: boolean = false;

  delete(todo: ITodo): void {
    this.deleteEmitter.emit(todo);
  }

  update(todo: ITodo): void {
    this.updateEmitter.emit(todo);
  }

  submit(todo: ITodo): void {
    this.update(todo);
    this.toggleEditState();
  }

  toggleEditState(): void {
    this.editing = !this.editing;
  }
}

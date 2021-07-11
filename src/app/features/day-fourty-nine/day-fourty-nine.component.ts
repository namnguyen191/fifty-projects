import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HoldState } from 'src/app/shared/holdable.directive';

@Component({
  selector: 'app-day-fourty-nine',
  templateUrl: './day-fourty-nine.component.html',
  styleUrls: ['./day-fourty-nine.component.scss'],
})
export class DayFourtyNineComponent implements OnInit {
  readonly HOLD_TO_DELETE_TIME = 2000;
  todos: { value: string }[] = [];

  constructor(private titleService: Title, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 49');
    const todosFromLocal = localStorage.getItem('todosList');
    if (todosFromLocal) {
      this.todos = JSON.parse(todosFromLocal);
    }
  }

  addTodo(event: Event, todo: HTMLInputElement) {
    event.preventDefault();
    this.todos.push({ value: todo.value });
    localStorage.setItem('todosList', JSON.stringify(this.todos));
    todo.value = '';
  }

  todoOnLeftClick(event: MouseEvent) {
    const todoListItem = event.target as HTMLLIElement;

    if (todoListItem.classList.contains('completed')) {
      this.renderer.removeClass(todoListItem, 'completed');
    } else {
      this.renderer.addClass(todoListItem, 'completed');
    }
  }

  todoOnRightClick(event: MouseEvent, index: number) {
    event.preventDefault();
    this.todos.splice(index, 1);
    localStorage.setItem('todosList', JSON.stringify(this.todos));
  }

  holdTimeHandler(holdTime: number, el: HTMLLIElement, index: number) {
    const opa = 1 - (1 / this.HOLD_TO_DELETE_TIME) * holdTime;
    this.renderer.setStyle(el, 'opacity', opa);

    if (holdTime === this.HOLD_TO_DELETE_TIME) {
      this.todos.splice(index, 1);
      localStorage.setItem('todosList', JSON.stringify(this.todos));
    }
  }

  holdStateHandler(state: HoldState, el: HTMLLIElement) {
    if (state === 'leave') {
      this.renderer.setStyle(el, 'opacity', 1);
    }
  }
}

'use strict';

import { Todo } from '../classes/Todo.js';

const container = document.querySelector('.todos');

export function submitNewTodo(evt){
    evt.preventDefault();
    const textField = document.querySelector('#add').value;
    const todo = new Todo(textField, Date.now().toString());
    container.appendChild(todo.render());
}
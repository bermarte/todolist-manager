'use strict';

import {
    Todo
} from '../classes/Todo.js';
import {
    restMethods
} from '../rest.js';

const container = document.querySelector('.todos');

export async function loadAllTodos() {
    const todos = await restMethods.getAll();

    todos.map(item => {
        const todo = new Todo(item.todoText, item.id, item.completed);
        container.appendChild(todo.render());
    });
}
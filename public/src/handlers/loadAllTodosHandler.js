'use strict';

import { Todo } from '../classes/Todo.js';
import { restMethods } from '../rest.js';
import { logger } from "../../lib/logger.js";

const container = document.querySelector('.todos');
/**
 * creates all the todo's from /todos end-point
 */
export async function loadAllTodos() {
    const todos = await restMethods.getAll();

    todos.map(item => {
        const todo = new Todo(item.todoText, item.id, item.completed);
        container.appendChild(todo.render());
    });
}

logger.add({
    handler: 'loadAllTodos'
});
'use strict';

import { Todo } from '../classes/Todo.js';
// Importing validationText function from helpers folder
import { validationText } from '../helpers/validateTodo.js';
import { logger } from "../../lib/logger.js";


const container = document.querySelector('.todos');

/**
 * @param  { event } evt - submit
 * creates a new todo object and calls the render function
 */
export function submitNewTodo(evt) {
    evt.preventDefault();
    const textField = document.querySelector('#add').value;
    if (validationText(textField)) {
        const todo = new Todo(textField, Date.now().toString(), false);
        container.appendChild(todo.render());
        //add item to db.json
        todo.add();
        logger.add({
            object: Date.now().toString()
        });
    }
    //reset the text once is done
    document.querySelector('#add').value = "";
}

logger.add({
    handler: 'submitNewTodo'
});
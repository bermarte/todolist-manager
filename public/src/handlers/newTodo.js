'use strict';


import { Todo } from '../classes/Todo.js';
// Importing validationText function from helpers folder
import {validationText} from '../helpers/validateTodo.js'


const container = document.querySelector('.todos');

export function submitNewTodo(evt) {
    evt.preventDefault();
    const textField = document.querySelector('#add').value;
    if (validationText(textField)) {
        const todo = new Todo(textField, Date.now().toString(), false);
        container.appendChild(todo.render());
        //add item to db.json
        todo.add();
    }
    document.querySelector('#add').value = "";
}
'use strict';

import { restMethods } from '../rest.js';
import { logger } from "../../lib/logger.js";

/**
 * Todo class
 */
export class Todo {
    constructor(text, id, completed) {
        this.todoText = text;
        this.id = id;
        this.completed = completed;
        console.log('new todo: ', this.id);
    }

    render() {
        const maxlength = 34;
        const li = document.createElement('LI');
        li.classList.add('todo-lists');
        li.id = this.id;
        const spanDone = document.createElement('SPAN');
        spanDone.classList.add('done');
        spanDone.addEventListener('click', () => this.toggle());

        const divText = document.createElement('INPUT');
        divText.setAttribute('contenteditable', true);
        divText.setAttribute('maxlength', maxlength);
        //input's width auto-grow
        divText.setAttribute('oninput','this.parentNode.dataset.value = this.value');
        divText.classList.add('li-text');
        //check toggle
        if (this.completed){ 
            divText.id = `text-${this.id}`;
            divText.classList.add('strike');
        }
        else{
            divText.id = `text-${this.id}`;
        }
        divText.value = this.todoText;

        const labelText = document.createElement('LABEL');
        labelText.classList.add('input-sizer');
        //set input's width
        labelText.setAttribute('data-value', this.todoText);
        labelText.appendChild(divText);
        

        const divbtns = document.createElement('DIV');
        const edit = document.createElement('SPAN');
        edit.classList.add('edit');
        edit.addEventListener('click', () => this.edit(`#text-${this.id}`));
        edit.innerHTML = '<i class="fas fa-pen"></i>';
        const del = document.createElement('SPAN');
        del.classList.add('delete');
        del.innerHTML = '<i class="fa fa-trash"></i>';

        const erase = 'this.parentNode.parentNode.remove()';
        del.setAttribute('onclick', erase);
        del.addEventListener('click', () => this.delete());
        divbtns.appendChild(edit);
        const space = document.createTextNode('\u00A0');
        divbtns.appendChild(space);
        divbtns.appendChild(del);

        li.appendChild(spanDone);
        li.appendChild(labelText);
        li.appendChild(divbtns);

        return li;
    }

    //add todo to db.json
    add() {
        console.log('add');
        const storeJson = {
            "todoText": this.todoText,
            "completed": this.completed,
            "id": this.id,
        }
        restMethods.postTodo(storeJson);
    }

    //delete todo from db.json
    delete() {
        restMethods.deleteTodo(this.id);
    }

    //edit todo
    edit(selector) {
        console.log('patch');
        const newText = document.querySelector(selector).value;
        const storeJson = {
            "todoText": newText,
            "id": this.id,
        }
        restMethods.patchTodo(this.id, storeJson);
    }

    //toggle .strike CSS class
    toggle() {
        console.log('toggle done');
        let toggle;
        const textField = document.querySelector(`#text-${this.id}`);
        if (textField.classList.contains('strike')) {
            textField.classList.remove('strike');
            toggle = false;
        } else {
            textField.classList.add('strike');
            toggle = true;
        }

        const storeJson = {
            "todoText": this.todoText,
            "completed": toggle,
            "id": this.id,
        }
        restMethods.patchTodo(this.id, storeJson);
    }

}

logger.add({
    class: 'Todo'
});
'use strict';

import {
    restMethods
} from '../rest.js';


export class Todo {
    constructor(text, id, completed) {
        this.todoText = text;
        this.id = id;
        this.completed = completed;
        console.log('new todo: ', this.id);
    }

    getText() {
        return this.todoText
    }
    setText(text) {
        this.todoText = text
    }
    render() {
        const li = document.createElement('LI');
        li.classList.add('todo-lists');
        li.id = this.id;
        const span = document.createElement("SPAN");
        span.classList.add('done');
        const done = `this.nextElementSibling.innerHTML = "<del>${this.todoText}</del>"`;
        span.setAttribute('onclick', done);

        const div = document.createElement('DIV');
        div.setAttribute('contenteditable', true);
        div.classList.add('li-text');
        div.innerText = this.todoText;

        const divbtns = document.createElement('DIV');
        const edit = document.createElement("SPAN");
        edit.classList.add('edit');
        edit.innerHTML = '<i class="fas fa-pen"></i>';
        const del = document.createElement("SPAN");
        del.classList.add('delete');
        del.innerHTML = '<i class="fa fa-trash"></i>';

        const erase = 'this.parentNode.parentNode.remove()';
        del.setAttribute('onclick', erase);
        del.addEventListener( 'click',
            x => this.delete()
        );
        divbtns.appendChild(edit);
        const space = document.createTextNode("\u00A0");
        divbtns.appendChild(space);
        divbtns.appendChild(del);

        li.appendChild(span);
        li.appendChild(div);
        li.appendChild(divbtns);

        return li;
    }

    //add todo to db.json
    add() {
        const storeJson = {
            "todoText": this.todoText,
            "completed": this.completed,
            "id": this.id,
        }
        restMethods.postTodo(storeJson);
    }

    //delete todo from db.json
    delete(){
        restMethods.deleteTodo(this.id);
    }

}

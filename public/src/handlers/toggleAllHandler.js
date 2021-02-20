'use strict';

import {
    Todo
} from '../classes/Todo.js';
import {
    restMethods
} from '../rest.js';

let strike = false;
export async function toggleAllTodos() {
    const container = document.querySelector('.todos');
    
    const children = container.childNodes;
    // filter li elements
    const lis = Array.from(children).filter(item => item.tagName === "LI");

    //toggle the CSS .strike class
    if (strike){
        lis.map(li=> {
            const textField = document.querySelector(`#text-${li.id}`);
            textField.classList.remove('strike');
        });
        strike = false;
        console.log(strike);
    }
    else{
        lis.map(li=> {
            const textField = document.querySelector(`#text-${li.id}`);
            textField.classList.add('strike');
        });
        strike = true;
    } 

}
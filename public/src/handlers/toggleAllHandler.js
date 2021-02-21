'use strict';

import { restMethods } from '../rest.js';
import { logger } from "../../lib/logger.js";

let strike = false;
/**
 * Strikethrough, cross out text of all todo's
 */
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
            //update item in db.json
            const storeJson = {
                "completed": false
            }
            restMethods.patchTodo(li.id, storeJson);
        });
        strike = false;
    }
    else{
        lis.map(li=> {
            const textField = document.querySelector(`#text-${li.id}`);
            textField.classList.add('strike');
            //update item in db.json
            const storeJson = {
                "completed": true
            }
            restMethods.patchTodo(li.id, storeJson);         
        });
        strike = true;
    } 

}

logger.add({
    handler: 'toggleAllTodos'
});
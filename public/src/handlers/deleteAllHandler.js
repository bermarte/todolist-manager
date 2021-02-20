'use strict';

import {
     restMethods
 } from '../rest.js';

export function deleteAllTodos() {
     var oldChildren = [];
     const container = document.querySelector('.todos');

     while (container.hasChildNodes()) {
          //remove item from db.json
          let toRemove = document.querySelector('li').id;
          restMethods.deleteTodo(toRemove);
          //remove DOM element
          oldChildren.push(container.removeChild(container.firstChild));
     }

}
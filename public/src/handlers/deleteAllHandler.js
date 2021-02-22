'use strict';

import { restMethods } from '../rest.js';
import { logger } from "../../lib/logger.js";

/**
 * delete all the todo's in the front-end and in the back-end
 */
export function deleteAllTodos() {
     
     var oldChildren = [];
     const container = document.querySelector('.todos');

     while (container.hasChildNodes()) {
          if (document.querySelector('li') === null) break;
          //remove item from db.json
          let toRemove = document.querySelector('li').id;
          restMethods.deleteTodo(toRemove);
          //remove DOM element
          oldChildren.push(container.removeChild(container.firstChild));
     }

}

logger.add({
     handler: 'deleteAllTodos'
 });
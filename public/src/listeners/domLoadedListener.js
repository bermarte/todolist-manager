'use strict';

import { loadAllTodos } from '../handlers/loadAllTodosHandler.js';

//load all the todo's when page is loaded
window.addEventListener('DOMContentLoaded', loadAllTodos);
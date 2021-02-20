'use strict';

import { submitNewTodo } from '../handlers/newTodo.js';

document.getElementById('todoForm').addEventListener('submit', submitNewTodo);

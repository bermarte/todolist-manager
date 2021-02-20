'use strict';

import { deleteAllTodos } from '../handlers/deleteAllHandler.js';

document.getElementById('delete-all').addEventListener('click', deleteAllTodos);
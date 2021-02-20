'use strict';

import { loadAllTodos } from '../handlers/loadAllTodosHandler.js';

//load todos when page is loaded
window.addEventListener('DOMContentLoaded', loadAllTodos);
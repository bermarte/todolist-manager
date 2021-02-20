'use strict';

import { toggleAllTodos } from '../handlers/toggleAllHandler.js';

document.getElementById('toggle-all').addEventListener('click', toggleAllTodos);
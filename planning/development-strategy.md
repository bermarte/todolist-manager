# Todo List: Practical JavaScript

A refactor of the Practical JavaScript Todo List

---

## User Story Dependencies

![Story Dependency Diagram](https://github.com/AnisyaPurnama/todolist-manager-group1/blob/main/planning/diagram.png?raw=true)

---

## WIREFRAME

![wireframe](https://github.com/AnisyaPurnama/todolist-manager-group1/blob/main/planning/ToDo.png?raw=true)


---

## 0.Setup

- Start a repo
- Add collaborators
- Set up a project board
- Study (and modify) the backlog
- Design a simple wireframe to set guidelines for UI/UX design.
- Devise a development strategy.
- Create initial README file
- Turn on GitHub Pages
- Each branch is merged to `master` branch after completion

---

## 1. Initialize Application

**As a visitor I want to see the home page when I load the site**

- Accessible website built with HTML and CSS

### HTML
create input element
div element for each display section

### CSS
styling of the html document and its body
styling of the background, inner content and lists

### REPO
- This user story is developed on branch `master`

___
## 2. Render list prototype

### As a visitor I want to create a new empty list with any title

### REPO
This user story is developed on a branch called `draft`

### VIEWS

- Create `class Todo`
- Create object the `render` function that render the new lists
- Create the function `submitNewTodo`
- add item to `db.json` `todo.add`

___

## 3. Input Validation

### REPO
This user story is developed on a branch called `validation`

- Check the length of the input: it shouldn't be empty or not longer than a given number

### VIEWS

- Create function `validationText`with max length 60

---
## 4. List prototype Delete

### As a visitor I want to remove items from list
### REPO
This user story is developed on a branch called `delete`

### VIEWS

- Create, inside `const erase` object the `delete` function
- Remove todo from the back-end `db.json`

### Delete all the todo's at once
This function is developed on a branch called `global_delete`

- Create the function `deleteAllTodos`
- Remove item from db.json
- Remove DOM element

---
## 5. List prototype Toggle Complete

### As a visitor I want to check the items on the lists that I have completed
### REPO
This user story is developed on a branch called `toggle_done`
### VIEWS
- Add `text-decoration: line-through` CSS class
- Add `toggle`function
- Change state in `db.json` accordingly

---

## 6. List prototype Toggle All

### As a visitor I want to check all the items on the lists that I have completed

### REPO
This user story is developed on a branch called `global_toggle`

- Create the `completeAll` function that render the new elements of the list
### HTML
Create check all button

---
## 7. List Prototype Editing List

### As a visitor want to remove any list from the manager
### REPO
This user story is developed on a branch called `patch`

- Create `edit`function, store it in Json
- Add EventListener click `edit` function that render the new elements of the list

---

## 8. Finishing Touch

- Code Validation
- Fix bugs and errors

---

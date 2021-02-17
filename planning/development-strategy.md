# Todo List: Practical JavaScript

A refactor of the Practical JavaScript Todo List

---

## User Story Dependencies

![Story Dependency Diagram](https://github.com/AnisyaPurnama/todolist-manager-group1/blob/main/planning/diagram.png?raw=true)

---

## WIREFRAME

![wireframe]()

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
This user story is developed on a branch called `render`

### VIEWS
Create, inside `const listPrototype` object the `render` function that render the new lists
___
## 3. List prototype Add
### As a visitor I want to add items to each list instance

### REPO
This user story is developed on a branch called `add`

### HANDLER
Create, inside `const listPrototype` object the `add` function that render the new elements of the list

### LISTENER
Add listeners for `button` on the list

### VIEWS
Create, inside `const listPrototype` object the `renderList` function that render the new items of the list.

---
## 4. List prototype Delete

### As a visitor I want to remove items from each list instance
### REPO
This user story is developed on a branch called `delete`

### HANDLER
Create, inside `const listPrototype` object the `delete` function that render the new elements of the list

### LISTENER
Add listeners for `icon` on the list item

### VIEWS
Edit the `renderList` function that render the new items of the list.

---
## 5. List prototype Toggle Complete

### As a visitor I want to check the items on the lists that I have completed
### REPO
This user story is developed on a branch called `complete`

### HANDLER
Create, inside `const listPrototype` object the `complete` function that render the new elements of the list

### LISTENER
Add listeners for `li` elements on the list item

### VIEWS
Edit the `renderList` function that render the new items of the list.

## CSS
Create the `complete`class

---
## 6. List prototype Toggle All
### As a visitor I want to check all the items on the lists that I have completed

### REPO
This user story is developed on a branch called `all`

### HANDLER
Create, inside `const listPrototype` object the `completeAll` function that render the new elements of the list

### LISTENER
Add listeners for `button` elements on the list

### VIEWS
Edit the `renderList` function that render the new items of the list.

## HTML

Create `check all`button

---
## 7. List Prototype Editing List

### As a visitor want to remove any list from the manager
### REPO
This user story is developed on a branch called `_`

### HANDLER
Create, inside `const listPrototype` object the `__` function that render the new elements of the list

### LISTENER
Add listeners for `__` elements on the list

### VIEWS

---
## 8. List Prototype Editing Items

### As a visitor want to update items in each list instance
### REPO
This user story is developed on a branch called `__`

### HANDLER
Create, inside `const listPrototype` object the `__` function that render the new elements of the list

### LISTENER
Add listeners for `__` elements on the list

### VIEWS

---

## 9. Finishing Touch

- Code Validation
- Fix bugs and errors

---

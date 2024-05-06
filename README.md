# todo_list


There will be default screen with all the todos, each todo will be clickable and if so it will be put into completed and removed from the default screen.

each todo will have these properties: title, description, dueDate, priority, project

logic: creation, compltetion status update, deleting of todo, changing all he properties,creation of new projects



1. all the todos will be stored in an array this array will be inside of the only instance of ToDos IIFE (todos will be objects created from a class ToDo)
2. we will be able to create instances of class Project that will be working as a folder for another todos
    - in this project we will be able to create instances of todos and they will automatically have assigned project property
3. method that removes todo
4. method that changes state of the todo

after finishing the console version we will start manipulating the dom


1. instances of Project class are all the classes we create
    -properties: type
    - methods: delete project, create todo
2. instances of ToDo class are all the todos
    -propeties: name, project, date created
    -methods: delete todo
3. all the todo objects will be inside of an todoArr and to see them we will access specific method
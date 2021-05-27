import './styles.css';
import {Todo, TodoList} from './classes/index.js';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
/* const tarea = new Todo('Aprender javascript');
todoList.nuevoTodo( tarea );
crearTodoHtml( tarea ); */
todoList.todos[0].impirmirClase();
console.log( todoList );
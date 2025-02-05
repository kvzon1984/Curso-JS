import { Todo } from '../models/todo.models'
import { createTodoHtml } from '../uses-cases/index';

let element;

/**
 * 
 * @param {String} elementId el elemento html
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = []) => {
    if (!element) element = document.querySelector( elementId );

    if (!element) throw new Error(`Element ${ elementId } not found`);

    element.innerHTML = '';

    todos.forEach(todo => {
        element.append( createTodoHtml( todo ) )
    });
    
}
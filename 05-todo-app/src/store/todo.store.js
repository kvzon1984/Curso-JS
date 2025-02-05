import { Todo } from "../todos/models/todo.models";

export const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del realidad'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStore();
    console.log('InitiStore');
}

const loadStore = () => {
    if( !localStorage.getItem('state') ) return;

    const { todos = [], filter = Filters.All } = JSON.parse( localStorage.getItem('state') );
    state.filter = filter;
    state.todos = todos;
}

const saveStateToLocalStorage  = () => {
    localStorage.setItem('state', JSON.stringify( state ))
};

const getTodos = ( filter = Filters.All ) => {

    switch( filter){
        case Filters.All:
            return [ ...state.todos ];
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        default:
            throw new Error(`Option ${ filter } is not valid`);
    }

}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if( !description ) throw new Error('Description in required');
    state.todos.push( new Todo( description ) );

    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
    
    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo;
    });
    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.done );
    saveStateToLocalStorage();
}

const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
import React from 'react';
import Header from './Header';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="todo-app">
                    <Header />
                    <CreateTodo />
                    <TodoList />
                </div>
            </div>
        );
    }
}
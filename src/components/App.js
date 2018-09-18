import React from 'react';
import Header from './Header';
import CreateTodo from './CreateTodo';
import TodoItems from './TodoItems';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="todo-app">
                    <Header />
                    <CreateTodo />
                    <TodoItems />
                </div>
            </div>
        );
    }
}
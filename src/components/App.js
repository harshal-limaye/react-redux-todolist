// system
import React from 'react';

// components
import Header from './Header';
import CreateTodo from '../containers/CreateTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="todo-app">
                    <Header />
                    <CreateTodo />
                    <VisibleTodoList 
                        todos={this.props.todos}
                        onDelete={this.props.delete}
                        onComplete={this.props.complete}
                    />
                </div>
            </div>
        );
    }
}

export default App;
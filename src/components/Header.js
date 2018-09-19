import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="todo-header">
                <h1>toDoList</h1>
                <ul className="filters">
                    <li>All</li>
                    <li>/</li>
                    <li>Completed</li>
                    <li>/</li>
                    <li>Pending</li>
                </ul>
            </div>
        );
    }
}

export default Header;
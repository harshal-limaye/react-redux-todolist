import React from 'react';
import FilterOptions from '../containers/FilterOptions';

class Header extends React.Component {
    render() {
        return (
            <div className="todo-header">
                <h1>toDoList</h1>
                <FilterOptions />
            </div>
        );
    }
}

export default Header;
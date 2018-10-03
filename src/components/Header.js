import React from 'react';
import FilterOptions from '../containers/FilterOptions';

class Header extends React.Component {
    render() {
        return (
            <div className="todo-header">
                <h1>{ this.props.appTitle }</h1>
                <FilterOptions />
            </div>
        );
    }
}

Header.defaultProps = {
    appTitle: 'toDoList'
}

export default Header;
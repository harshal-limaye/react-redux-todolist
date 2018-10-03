import React from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
    appTitle: PropTypes.string
}

Header.defaultProps = {
    appTitle: 'toDoList'
}

export default Header;
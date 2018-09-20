import React from 'react';

const Filter = ({ setFilter }) => {
    return (
        <ul className="filters">
            <li onClick={() => setFilter('ALL')}>All</li><li>/</li>
            <li onClick={() => setFilter('ACTIVE')}>Active</li><li>/</li>
            <li onClick={() => setFilter('COMPLETED')}>Completed</li>
        </ul>
    );
}

export default Filter;
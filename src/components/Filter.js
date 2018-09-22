import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <ul className="filters">
                <li className={this.getClass('ALL')} onClick={() => this.setFilter('ALL')}>All</li><li>/</li>
                <li className={this.getClass('ACTIVE')} onClick={() => this.setFilter('ACTIVE')}>Active</li><li>/</li>
                <li className={this.getClass('COMPLETED')} onClick={() => this.setFilter('COMPLETED')}>Completed</li>
            </ul>
        );
    }

    getClass = (filter) => this.props.visibility === filter ? 'active' : '';

    setFilter = (filter) => this.props.setFilter(filter);
}

export default Filter;
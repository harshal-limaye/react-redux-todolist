import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <ul className="filters">
                <li className={this.getClass('ALL')} onClick={() => this.props.setFilter('ALL')}>All</li><li>/</li>
                <li className={this.getClass('ACTIVE')} onClick={() => this.props.setFilter('ACTIVE')}>Active</li><li>/</li>
                <li className={this.getClass('COMPLETED')} onClick={() => this.props.setFilter('COMPLETED')}>Completed</li>
            </ul>
        );
    }

    getClass = (filter) => this.props.visibility === filter ? 'active' : '';
}

export default Filter;
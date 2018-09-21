const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [ { id: state.length, text: action.text, completed: false }, ...state ];
        case 'COMPLETE':
            return state.filter(t => t.id === action.id ? Object.assign({}, t, {completed: !t.completed}) : t);
        case 'DELETE':
            return state.filter(t => t.id !== action.id);
        default:
            return state;
    }
}

export default todos;
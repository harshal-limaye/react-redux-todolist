const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [ ...state, { id: state.length, text: action.text, completed: false } ];
        case 'DELETE':
            return state.filter(t => t.id !== action.id);
        default:
            return state;
    }
}

export default todos;
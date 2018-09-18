const visibility = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state, 
                { id: state.length, text: action.text, completed: false } 
            ];

        default:
            return state;
    }
}

export default visibility;
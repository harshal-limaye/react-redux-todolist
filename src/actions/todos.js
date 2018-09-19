export const addToDo = text => ({ type: 'ADD', text });

export const completeToDO = id => ({ type: 'COMPLETE', id });

export const deleteToDO = id => ({ type: 'DELETE', id });
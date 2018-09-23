export const getState = () => {
    try {
        const storedState = localStorage.getItem('state');
        return storedState === null ? undefined : JSON.parse(storedState);
    } catch (error) {
        return undefined;
    }
}

export const setState = (state) => {
    try { 
        localStorage.setItem('state', JSON.stringify(state))
    } catch (error) {
        // no need to do anything
    }
}
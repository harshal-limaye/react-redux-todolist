import { setVisibilityFilter } from '../../actions/visibility';

describe('testing visibility filter actions', () => {
    test('should create visibility action', () => {
        const action = setVisibilityFilter('ACTIVE');
        expect(action).toEqual({ type: 'SET_VISIBILITY_FILTER', filter: 'ACTIVE' });
    });
});
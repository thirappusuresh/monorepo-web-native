import reducer, {
    initialState,
} from '../LoginDucks';

it('should return default state', () => {
    expect(reducer()).toEqual(initialState);
});

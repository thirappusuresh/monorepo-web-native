import reducer, { initialState, setFeatures, ActionTypes } from '../FeatureDucks';

it('should correctly set initial state', () => {
    expect(reducer(null)).toEqual(initialState);
});

it('should correctly define setFeatures', () => {
    expect(setFeatures).toBeDefined();
});

it('should set features action correctly', () => {
    const features = 'foo';

    const action = setFeatures({ features });
    const expectedAction = {
        type: ActionTypes.FEATURE_DUCKS_SET_FEATURES,
        payload: {
            features,
        },
    };
    expect(action).toEqual(expectedAction);
});

it('should set features state correctly', () => {
    const features = 'foo';
    const action = {
        type: ActionTypes.FEATURE_DUCKS_SET_FEATURES,
        payload: {
            features,
        },
    };

    const state = reducer(initialState, action);
    const expectedState = {
        ...initialState,
        data: {
            ...initialState.data,
            features,
        },
    };

    expect(state).toEqual(expectedState);
});

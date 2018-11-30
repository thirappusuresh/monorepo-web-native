import { createAction } from 'redux-actions';
import keymirror from 'keymirror';

export const initialState = {
    data: {
        features: null,
    },
};

export const ActionTypes = keymirror({
    FEATURE_DUCKS_SET_FEATURES: null,
});

export const setFeatures = createAction(ActionTypes.FEATURE_DUCKS_SET_FEATURES);

export default function reducer(reducerState, action = {}) {
    const state = reducerState || initialState;
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.FEATURE_DUCKS_SET_FEATURES: {
            return {
                ...state,
                data: {
                    ...state.data,
                    features: payload.features,
                },
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
}

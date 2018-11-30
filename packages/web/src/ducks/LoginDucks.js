import keymirror from 'keymirror';
import { createAction } from 'redux-actions';

export const LoginDucksActionTypes = keymirror({
    LOGIN_DUCKS_SYNC_MOBILE_NUMBER: null,
    LOGIN_DUCKS_SYNC_PASSWORD: null,
});

export const initialState = {
    data: {
        mobileNumber: '',
        password: '',
    },
    ui: {},
};

export const syncMobileNumberField = createAction(LoginDucksActionTypes.LOGIN_DUCKS_SYNC_MOBILE_NUMBER);
export const syncPasswordField = createAction(LoginDucksActionTypes.LOGIN_DUCKS_SYNC_PASSWORD);

export default function reducer(reducerState, action = {}) {
    const state = reducerState || initialState;
    const { type, payload } = action;

    switch (type) {
        case LoginDucksActionTypes.LOGIN_DUCKS_SYNC_MOBILE_NUMBER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    mobileNumber: payload,
                },
            };
        }

        case LoginDucksActionTypes.LOGIN_DUCKS_SYNC_PASSWORD: {
            return {
                ...state,
                data: {
                    ...state.data,
                    password: payload,
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

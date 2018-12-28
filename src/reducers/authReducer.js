const initialState = {
    userDetails: {},
    token: null,
    username: null
};

export default (state = initialState, action) => {

    switch (action.type) {

    case "ACCOUNT_ACTIVATED":
        return {
            ...state,
            token: action.payload.token,
            username: action.payload.username
        };

    default:
        return state;
    }

};

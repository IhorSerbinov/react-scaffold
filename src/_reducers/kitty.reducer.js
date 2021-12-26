import kittyTypes from '_types/kitty.types';

const initialState = {
  loading: false,
  error: undefined,
  kitties: [],
};

const kittyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case kittyTypes.KITTY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case kittyTypes.KITTY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case kittyTypes.KITTY_SUCCESS: {
      return {
        ...state,
        loading: false,
        kitties: action.payload.data,
        error: null,
      };
    }

    default:
      return state;
  }
};

export default kittyReducer;

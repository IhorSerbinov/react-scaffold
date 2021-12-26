import kittyTypes from '_types/kitty.types';

const kittyRequest = () => dispatch => {
  const action = {
    types: [
      kittyTypes.KITTY_REQUEST,
      kittyTypes.KITTY_SUCCESS,
      kittyTypes.KITTY_FAILURE,
    ],
    payload: {
      request: {
        url: 'v1/images/search',
        method: 'get',
      },
    },
  };

  return dispatch(action);
};
const getKitty = () => dispatch => {
  dispatch(kittyRequest())
    .then()
    .catch(e => console.log(e));
};

export default {
  getKitty,
};

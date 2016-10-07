import {
  PROFILE__REQUESTED,
  PROFILE__SUCCESSFULLY_RECEIVED,
  PROFILE__FAILED_RECEIVING
}  from '../constants/ActionTypes';

export default function profile(state = {}, action) {

  switch (action.type) {

    case PROFILE__REQUESTED:
      console.log('PROFILE__REQUESTED - action', action);
      return Object.assign({}, state, {});

    case PROFILE__SUCCESSFULLY_RECEIVED:
      console.log('PROFILE__SUCCESSFULLY_RECEIVED - action', action);

      let { id, username, email } = action.payload;

      return Object.assign({}, state, {
        id,
        username,
        email
      });

    case PROFILE__FAILED_RECEIVING:
      console.log('PROFILE__FAILED_RECEIVING - action', action);
      return Object.assign({}, state, {});

    default:
      return state;
  }
}

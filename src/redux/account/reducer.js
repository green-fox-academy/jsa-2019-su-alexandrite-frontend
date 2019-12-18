import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './actionType';

const initialState = {
  error: '',
  users: [
    {
      user_id: 1,
      userName: 'Aaron',
      passWord: '123456',
    },
    {
      user_id: 2,
      userName: 'Ajax',
      passWord: '123456',
    },
    {
      user_id: 3,
      userName: 'Sherry',
      passWord: '123456',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return state;
    case FETCH_USERS_SUCCESS:
      return state;
    case FETCH_USERS_FAILURE:
      return state.error;
    default:
      return state;
  }
};

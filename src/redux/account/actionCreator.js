import {
  FETCH_USERS_START,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from './actionType';

const fetchUsersStart = () => ({
  type: FETCH_USERS_START,
});

const fetchUsersFailure = (payLoad) => ({
  type: FETCH_USERS_FAILURE,
  payLoad,
});

const fetchUsersSuccess = (payLoad) => ({
  type: FETCH_USERS_SUCCESS,
  payLoad,
});


export default {
  fetchUsersStart,
  fetchUsersFailure,
  fetchUsersSuccess,
};

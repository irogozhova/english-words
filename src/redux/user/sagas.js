import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getCurrentUserRequest,
  signInRequest,
  signUpRequest,
  signOutRequest,
} from "api/user";

function* getCurrentUserSaga() {
  try {
    const { data } = yield call(getCurrentUserRequest);
    // yield put({ type: CurrentUserActions.FULFILLED, payload: data });
  } catch (e) {
    // yield put({ type: CurrentUserActions.REJECTED });
    // yield put(push('/signin'));
  }
}

function* signinSaga(payload) {
  try {
    const data = yield call(signInRequest, payload);
    yield put({ type: "user/signinSuccess", data });
  } catch (e) {
    // yield put({ type: CurrentUserActions.REJECTED });
    // yield put(push('/signin'));
  }
}

function* signupSaga(payload) {
  try {
    const data = yield call(signUpRequest, payload);
    yield put({ type: "user/signupSuccess", data });
  } catch (e) {
    // yield put({ type: CurrentUserActions.REJECTED });
    // yield put(push('/signin'));
  }
}

function* signoutSaga() {
  try {
    yield call(signOutRequest);
    yield put({ type: "user/signoutSuccess" });
  } catch (e) {
    // yield put({ type: CurrentUserActions.REJECTED });
    // yield put(push('/signin'));
  }
}

function* userSagas() {
  yield all([
    takeLatest("user/getCurrentUser", getCurrentUserSaga),
    takeLatest("user/signin", signinSaga),
    takeLatest("user/signup", signupSaga),
    takeLatest("user/signout", signoutSaga),
  ]);
}

export default userSagas;

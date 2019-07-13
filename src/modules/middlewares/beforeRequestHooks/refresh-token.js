import { RSAA } from 'redux-api-middleware';
import * as AuthActions from '../../actions/AuthActions';

// if token's time to live is less than that, it should be replaced
const minimumTTL = 5 * 60 * 1000;

const isTokenExpired = expirationDate => {
  const now = Date.now();
  return expirationDate && expirationDate - now < minimumTTL;
};

export default store => next => async action => {
  const rsaa = action[RSAA];

  if (rsaa && action.authorize) {
    const { auth } = store.getState();

    try {
      // if token is expired, refresh it before dispatching rsaa.
      // if token is already being refreshed, wait for the request to finish
      if (isTokenExpired(auth.accessTokenExpiresAt)) {
        if (!global.refreshTokenPromise) {
          const refreshTokenPromise = store.dispatch(
            AuthActions.refreshToken()
          );

          global.refreshTokenPromise = refreshTokenPromise;
          await refreshTokenPromise;
          delete global.refreshTokenPromise;
        } else {
          await global.refreshTokenPromise;
        }
      }
    } catch ({ message }) {
      console.warn(message);
    }
  }
  return next(action);
};

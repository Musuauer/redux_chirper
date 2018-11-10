export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function serAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}

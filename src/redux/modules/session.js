/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const SESSION_CREATE = 'SESSION_CREATE'
export const SESSION_DESTROY = 'SESSION_DESTROY'

// ------------------------------------
// Actions
// ------------------------------------
export const create = (value: number = 1): Action => ({
  type: SESSION_CREATE,
  payload: value
})

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(create(getState().create()))
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  create,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SESSION_CREATE]: (state, {payload}) => state + payload + 5
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state: number = initialState, action: Action): Object {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

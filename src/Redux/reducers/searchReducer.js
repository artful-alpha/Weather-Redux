import { DELETE_SEARCH_CITY, SEARCH_CITY } from "../actions/searchAction";

const initialState = {
  search: '',
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CITY :
      return {
        ...state,
        search: action.payload
      }
    case DELETE_SEARCH_CITY :
      return {
        ...state,
        search: action.payload
      }

    default:
      return state
  }
}

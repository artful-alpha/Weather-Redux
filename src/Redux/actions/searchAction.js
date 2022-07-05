import { actionCreator } from "./actionCreator";

const SEARCH_CITY = 'SEARCH_CITY'
const DELETE_SEARCH_CITY = 'DELETE_SEARCH_CITY'

const setSearchCity = actionCreator(SEARCH_CITY)
const setDeleteSearchCity = actionCreator(DELETE_SEARCH_CITY)

export { SEARCH_CITY, DELETE_SEARCH_CITY }
export { setSearchCity, setDeleteSearchCity }

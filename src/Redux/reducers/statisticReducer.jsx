import { INCREMENT_CITY_COUNT } from "../../Redux/actions/statisticAction";
const defaultState = {
  countSearchCity: {},
};

export function statisticReducer(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT_CITY_COUNT:
      let index = 1;
      if (state.countSearchCity.hasOwnProperty(action.payload)) {
        index = state.countSearchCity[action.payload] + 1;
      }
      return {
        ...state,
        countSearchCity: Object.assign(state.countSearchCity, {
          [action.payload]: index,
        }),
      };
    default:
      return state;
  }
}

// export function statisticReducer(state = defaultState, { payload, type }) {
//   switch (type) {
//     case INCREMENT_CITY_COUNT:
//       const cityName = state.countSearchCity[payload];

//       return {
//         ...state,
//         countSearchCity: { [payload]: payload },
//       };
//     default:
//       return state;
//   }
// }

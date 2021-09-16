import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "./../actions";

const initialState = {
  villager: {
    id: 0,
    "file-name": "",
    name: {
      "name-USen": "",
      "name-EUen": "",
      "name-EUde": "",
      "name-EUes": "",
      "name-USes": "",
      "name-EUfr": "",
      "name-USfr": "",
      "name-EUit": "",
      "name-EUnl": "",
      "name-CNzh": "",
      "name-TWzh": "",
      "name-JPja": "",
      "name-KRko": "",
      "name-EUru": "",
    },
    personality: "",
    "birthday-string": "",
    birthday: "",
    species: "",
    gender: "",
    "catch-phrase": "",
    icon_uri: "",
    image_uri: "",
  },
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        villager: {},
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        villager: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        villager: {},
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

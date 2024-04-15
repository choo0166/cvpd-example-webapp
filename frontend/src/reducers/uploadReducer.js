
const initialState = {
  file: null,
  uploading: false
}

const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILE":
      return { ...state, file: action.payload }
    case "SET_UPLOADING":
      return { ...state, uploading: action.payload }
    default:
      return state
  }
}

// action creators
export const setFile = (filename) => {
  return {
    type: "SET_FILE",
    payload: filename
  }
}

export const setUploading = (bool) => {
  return {
    type: "SET_UPLOADING",
    payload: bool
  }
}

export default uploadReducer
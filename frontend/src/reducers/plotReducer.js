const initialState = {
  groupBy: null,
  aggMetric: null,
  loading: false,
  chart: null
}

const plotReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GROUPBY":
      return { ...state, groupBy: action.payload }
    case "SET_AGGMETRIC":
      return { ...state, aggMetric: action.payload }
    case "SET_LOADING":
      return { ...state, loading: action.payload }
    case "SET_CHART":
      return { ...state, chart: action.payload }
    default:
      return state
  }
}

// action creators
export const setGroupBy = (opt) => {
  return {
    type: "SET_GROUPBY",
    payload: opt
  }
}

export const setAggMetric = (opt) => {
  return {
    type: "SET_AGGMETRIC",
    payload: opt
  }
}

export const setLoading = (bool) => {
  return {
    type: "SET_LOADING",
    payload: bool
  }
}

export const setChart = (chartData) => {
  return {
    type: "SET_CHART",
    payload: chartData
  }
}

export default plotReducer



import { configureStore } from '@reduxjs/toolkit'
import uploadReducer from './reducers/uploadReducer'
import plotReducer from './reducers/plotReducer'

const store = configureStore({
  reducer: {
    file: uploadReducer,
    uploading: uploadReducer,
    groupBy: plotReducer,
    aggMetric: plotReducer,
    chart: plotReducer,
    loading: plotReducer
  }
})

export default store

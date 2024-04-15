import axios from 'axios'

// backend server
export const backendApi = axios.create({
  baseURL: "http://localhost:8080"
})

export const getChart = async (params) => {
  try {
    const response = await backendApi.get('/chart', {params: params})
    return response.data
    // const response = await fetch(backendApi.defaults.baseURL + '/chart?' + new URLSearchParams(params))
    // if (!response.ok) {
    //   throw new Error('Request failed with status ' + response.status)
    // }
    // const data = await response.json()
    // return data
  } catch (error) {
    throw error
  }
}
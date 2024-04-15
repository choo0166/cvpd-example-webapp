import axios from 'axios'

// backend server
export const backendApi = axios.create({
  baseURL: "http://localhost:8080/upload"
})

// export const upload = async (formData) => {
//   try {
//     const response = await backendApi.post('/upload', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//     return response.data
//   } catch (error) {
//     throw error
//   }
// }

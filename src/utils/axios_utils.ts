import axios from 'axios'

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
})

export const axiosRequest = ({ ...options }) => {
  const onSucces = (res: any) => res
  const onFailure = (err: any) => err

  return client({ ...options })
    .then(onSucces)
    .catch(onFailure)
}

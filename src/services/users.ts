import { API } from '../config'

export const getUser = async () => {
  const url = `${API.RIMAC}/user.json`
  return await fetch(url).then((res) => {
    if (!res.ok) throw new Error('Error fetching characters')
    return res.json()
  })
}

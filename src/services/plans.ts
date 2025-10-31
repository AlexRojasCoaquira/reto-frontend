import { API } from '../config'

export const getPlans = async () => {
  const url = `${API.RIMAC}/plans.json`
  return await fetch(url).then((res) => {
    if (!res.ok) throw new Error('Error fetching characters')
    return res.json()
  })
}

import { useState, useEffect } from 'react'
import type { Plan } from '../types/plan'
import { getPlans } from '../services/plans'
import { calculateAge } from '../utils/date'

export const usePlan = (date: string) => {
  const [planList, setPlanList] = useState<Plan[]>([])

  useEffect(() => {
    const fetchPlans = async () => {
      let age = 0
      if (date) age = calculateAge(date)

      try {
        const data = await getPlans()
        const filterData = data.list.filter((plan: Plan) => plan.age > age)
        setPlanList(filterData)
      } catch (error) {
        console.error('Error fetching plans:', error)
      }
    }

    fetchPlans()
  }, [])

  return { planList, setPlanList }
}

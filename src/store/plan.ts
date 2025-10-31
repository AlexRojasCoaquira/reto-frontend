import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Plan } from '../types/plan'

interface PlanContextType {
  plan: Plan
  setPlan: (plan: Plan) => void
  clearPlan: () => void
}

export const usePlanStore = create<PlanContextType>()(
  persist(
    (set) => ({
      plan: {
        name: '',
        price: 0,
        description: [],
        age: 0,
      },
      setPlan: (plan) => set({ plan }),
      clearPlan: () =>
        set({
          plan: {
            name: '',
            price: 0,
            description: [],
            age: 0,
          },
        }),
    }),
    {
      name: 'plan-storage',
    }
  )
)

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserData } from '../types/user'

interface UserContextType {
  user: UserData
  setUser: (user: UserData) => void
  clearUser: () => void
}

export const useUserStore = create<UserContextType>()(
  persist(
    (set) => ({
      user: {
        name: '',
        lastName: '',
        birthDay: '',
        documentNumber: '',
        documentType: '',
        phoneNumber: '',
      },
      setUser: (user) => set({ user }),
      clearUser: () =>
        set({
          user: {
            name: '',
            lastName: '',
            birthDay: '',
            documentNumber: '',
            documentType: '',
            phoneNumber: '',
          },
        }),
    }),
    {
      name: 'user-storage',
    }
  )
)

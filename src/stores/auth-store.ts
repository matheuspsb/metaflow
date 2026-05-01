import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        isAuthenticated: false,
        login: (token) => set({ token, isAuthenticated: true }, false, 'auth/login'),
        logout: () => set({ token: null, isAuthenticated: false }, false, 'auth/logout'),
      }),
      { name: 'auth-store' },
    ),
    { name: 'auth-store' },
  ),
)

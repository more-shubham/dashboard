import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserState {
    username?: string
    password?: string
}

const useUserStore = create<UserState>()(
    persist(
        (set) => ({}),
        { name: 'userStore' },
    ),
)

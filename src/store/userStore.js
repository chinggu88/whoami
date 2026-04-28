// 전역 상태 예시 (Zustand, Redux 등 라이브러리 도입 전 자리표시용)
// 실제로는 다음과 같이 사용합니다.
//
// import { create } from 'zustand'
//
// export const useUserStore = create((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
//   logout: () => set({ user: null }),
// }))

export const initialUserState = {
  user: null,
}

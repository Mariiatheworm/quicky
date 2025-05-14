import { createStore } from 'zustand/vanilla';

type State = {
  user: string | null;
  setUser: (name: string) => void;
};

export const useMainStore = createStore<State>((set) => ({
  user: null,
  setUser: (name) => set({ user: name }),
}));
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Definiremos la interfaz completa más adelante combinando Slices
interface AppState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        isSidebarOpen: false,
        toggleSidebar: () =>
          set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      }),
      {
        name: 'coffee-app-storage', // nombre en localStorage
        // Aquí podemos filtrar qué partes persistir y cuáles no
        partialize: (state) => ({ isSidebarOpen: state.isSidebarOpen }),
      }
    )
  )
);

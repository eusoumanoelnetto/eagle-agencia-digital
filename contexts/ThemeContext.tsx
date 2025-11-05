
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      // 1) Se o usuário definiu manualmente, respeita
      const override = (localStorage.getItem('themeOverride') as Theme | null) || (localStorage.getItem('theme') as Theme | null);
      if (override === 'light' || override === 'dark') {
        return override;
      }

      // 2) Caso contrário, escolhe por horário local (06:00–18:00 claro, fora isso escuro)
      const hour = new Date().getHours();
      return hour >= 6 && hour < 18 ? 'light' : 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const next = prevTheme === 'light' ? 'dark' : 'light';
      // Ao alternar manualmente, grava override explícito
      localStorage.setItem('themeOverride', next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

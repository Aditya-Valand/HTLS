import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" forcedTheme="dark" storageKey="theme-storage" {...props}>
      {children}
    </NextThemesProvider>
  )
}
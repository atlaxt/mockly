export const isDark = computed(() => useColorMode().value === 'dark')

export function toggleTheme() {
  const colorMode = useColorMode()
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

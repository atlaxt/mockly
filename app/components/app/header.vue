<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: 'MOCKLY',
      class: 'text-3xl font-bold font-stretch-ultra-condensed',
    },
  ],
  [
    {
      label: 'Docs',
      icon: 'i-lucide-book-open',
      to: '/docs',
      disabled: true,
    },
    {
      label: 'About',
      icon: 'i-lucide-lightbulb',
      to: '/docs',
      disabled: true,
    },
    {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/atlaxt/mockly',
      target: '_blank',
    },
    {
      icon: isDark.value ? 'lucide:sun' : 'lucide:moon',
      onSelect: () => toggleTheme(),
    },
  ],
])
</script>

<template>
  <header class="flex w-full justify-between items-center py-4">
    <UNavigationMenu highlight color="neutral" :items="items" class="w-full">
      <template #logo>
        <label class="text-3xl font-bold font-stretch-ultra-condensed">
          MOCKLY
        </label>
      </template>
    </UNavigationMenu>
  </header>
</template>

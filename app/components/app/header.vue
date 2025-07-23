<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: 'MOCKLY',
      class: 'text-3xl font-bold font-stretch-ultra-condensed',
      // activeClass: '',
      // slot: 'logo' as const,
      // class: 'flex justify-center items-center',
    },
  ],
  [
    {
      label: 'Docs',
      icon: 'i-lucide-book-open',
      to: '/docs',
    },
    {
      label: 'About',
      icon: 'i-lucide-lightbulb',
      to: '/docs',
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

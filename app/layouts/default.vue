<script setup lang="ts">
const route = useRoute()

const links = [
  { label: 'Overview', to: '/' },
  { label: 'API Docs', to: '/docs' },
]
</script>

<template>
  <div class="flex min-h-screen flex-col bg-slate-950 text-slate-100">
    <header class="border-b border-slate-800 bg-slate-950/70 backdrop-blur">
      <nav class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="text-sm font-semibold tracking-wide text-primary-400">
          Mockly
        </NuxtLink>
        <div class="flex gap-2">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="rounded-lg px-3 py-2 text-xs font-medium uppercase tracking-wide transition-colors"
            :class="route.path === link.to ? 'bg-primary-500/10 text-primary-300' : 'text-slate-400 hover:text-primary-200'"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </nav>
    </header>

    <main class="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>

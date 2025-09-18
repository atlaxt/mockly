<script setup lang="ts">
defineProps<{
  codeSample: string
}>()
</script>

<template>
  <UCard class="border border-slate-800 bg-slate-950/70 text-slate-100" :ui="{ body: 'space-y-4' }">
    <h3 class="text-lg font-semibold text-white">
      Integration example
    </h3>
    <p class="text-sm text-slate-400">
      Here is a quick snippet you can drop into a Nuxt or Next.js page to hydrate UI with the user list. Swap it for Axios, TanStack Query or any other data layer as needed.
    </p>
    <pre class="overflow-x-auto rounded-2xl bg-slate-900/70 p-4 text-xs leading-relaxed text-slate-200">
      <code v-text="codeSample" />
    </pre>
    <p class="text-xs text-slate-500">
      Note: replace `fetch` with your preferred client. Mockly responds with cache-friendly 200 OK responses.
    </p>
  </UCard>
</template>

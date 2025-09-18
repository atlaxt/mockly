<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-20 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row">
    <span>© {{ year }} Mockly • Built with Nuxt & Tailwind.</span>
    <span>mockly.atlaxt.me — public mock API with CORS enabled</span>
  </footer>
</template>

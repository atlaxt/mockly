<script setup lang="ts">
defineProps<{
  baseApiUrl: string
}>()

const emit = defineEmits<{
  (event: 'copy'): void
}>()
</script>

<template>
  <section class="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)]">
    <div class="flex flex-col gap-12 lg:flex-row lg:items-center">
      <div class="flex-1 space-y-8">
        <UBadge color="neutral" variant="soft" size="md" class="rounded-full px-3 py-1 text-xs uppercase tracking-wide">
          Mock API toolkit
        </UBadge>
        <h1 class="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Ship prototypes faster with pre-built data from Mockly
        </h1>
        <p class="max-w-2xl text-base leading-relaxed text-slate-300">
          Skip the tedious seed scripts. Mockly delivers realistic users, todos and UUIDs so you can focus on product flows,
          demos and testing without touching your production APIs.
        </p>
        <div class="flex flex-wrap gap-4">
          <UButton color="neutral" variant="solid" icon="lucide:book-open" size="md" to="/docs">
            Read the docs
          </UButton>
          <UButton color="neutral" variant="ghost" icon="lucide:arrow-up-right" size="md" :to="baseApiUrl" target="_blank" rel="noopener">
            Browse live endpoints
          </UButton>
        </div>
      </div>
      <div class="flex flex-1 flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Base API URL
          </p>
          <div class="mt-2 flex items-center gap-3 rounded-xl bg-slate-950/60 px-4 py-3 font-mono text-sm text-slate-200">
            <span class="truncate">{{ baseApiUrl }}</span>
            <UButton color="neutral" variant="ghost" size="xs" icon="lucide:copy" @click="emit('copy')" />
          </div>
        </div>
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  parameters: UuidParameter[]
}>()
</script>

<template>
  <UCard class="border border-slate-800 bg-slate-950/70 text-slate-100" :ui="{ body: 'space-y-4' }">
    <h3 class="text-lg font-semibold text-white">
      UUID query parameters
    </h3>
    <p class="text-sm text-slate-400">
      Toggle the query parameters below to explore different UUID versions and behaviours.
    </p>
    <div class="divide-y divide-slate-800 rounded-2xl border border-slate-900/60">
      <div
        v-for="param in parameters"
        :key="param.key"
        class="grid gap-1 px-5 py-4 sm:grid-cols-4"
      >
        <p class="font-mono text-xs text-blue-300 sm:col-span-1">
          {{ param.key }}
        </p>
        <p class="text-xs text-slate-300 sm:col-span-1">
          {{ param.values }}
        </p>
        <p class="text-xs text-slate-400 sm:col-span-2">
          {{ param.note }}
          <span v-if="param.required" class="ml-1 text-red-400">(required)</span>
        </p>
      </div>
    </div>
  </UCard>
</template>

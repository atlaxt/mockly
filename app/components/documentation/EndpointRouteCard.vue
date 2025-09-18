<script setup lang="ts">
const props = defineProps<{
  route: ResolvedEndpointRoute
}>()

const methodColor = computed(() => {
  const colors: Record<string, any> = {
    GET: 'success',
    POST: 'info',
    PUT: 'warning',
    PATCH: 'warning',
    DELETE: 'error',
  }

  return colors[props.route.method.toUpperCase()] || 'info'
})
</script>

<template>
  <UCard class="border border-slate-800 bg-slate-950/80 text-slate-100" :ui="{ body: 'space-y-5' }">
    <div class="space-y-2">
      <div class="flex items-center gap-2 text-sm">
        <UBadge :color="methodColor" variant="soft" size="md" class="font-semibold uppercase tracking-wide">
          {{ route.method }}
        </UBadge>
        <code class="rounded-lg bg-slate-900/80 px-2 py-1 font-mono text-xs text-slate-300">{{ route.path }}</code>
      </div>
      <p class="text-xs leading-relaxed text-slate-400">
        {{ route.description }}
      </p>
      <ul v-if="route.tips" class="list-disc space-y-1 pl-4 text-xs text-slate-500">
        <li v-for="tip in route.tips" :key="tip">
          {{ tip }}
        </li>
      </ul>
    </div>

    <div class="grid gap-4 lg:grid-cols-1 xl:grid-cols-2">
      <div class="space-y-2">
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">
          cURL
        </p>
        <pre class="overflow-x-auto rounded-xl bg-slate-900/70 p-3 text-[11px] leading-relaxed text-slate-200">{{ route.curl }}</pre>
      </div>
      <div class="space-y-2">
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Sample response
        </p>
        <pre class="overflow-x-auto rounded-xl bg-slate-900/70 p-3 text-[11px] leading-relaxed text-slate-200">{{ route.sampleResponse }}</pre>
      </div>
    </div>
  </UCard>
</template>

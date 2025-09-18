<script setup lang="ts">
const props = defineProps<{
  baseApiUrl: string
  routes: ResolvedEndpointRoute[]
}>()

const demoRoutes = computed(() => props.routes.filter(route => Boolean(route.demoPath)))
const selectedPath = ref('')
const loading = ref(false)
const response = ref<string | null>(null)
const errorMessage = ref<string | null>(null)

const selectItems = computed(() =>
  demoRoutes.value.map(route => ({
    id: route.demoPath!,
    label: `${route.method} ${route.demoPath}`,
  })),
)

watch(
  demoRoutes,
  (routes) => {
    if (!routes.length) {
      selectedPath.value = ''
      return
    }

    if (!routes.some(route => route.demoPath === selectedPath.value)) {
      selectedPath.value = routes[0]?.demoPath || ''
    }
  },
  { immediate: true },
)

const formattedResponse = computed(() => {
  if (!response.value) {
    return ''
  }

  try {
    return JSON.stringify(JSON.parse(response.value), null, 2)
  }
  catch {
    return response.value
  }
})

async function runDemo() {
  if (!process.client || !selectedPath.value) {
    return
  }

  loading.value = true
  response.value = null
  errorMessage.value = null

  try {
    const endpoint = `${props.baseApiUrl}${selectedPath.value}`
    const res = await fetch(endpoint)

    if (!res.ok) {
      errorMessage.value = `Request failed: ${res.status} ${res.statusText}`
      return
    }

    const text = await res.text()
    response.value = text
  }
  catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Unexpected error while fetching the endpoint.'
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
    <h4 class="text-sm font-semibold uppercase tracking-wide text-slate-400">
      Live sample
    </h4>
    <p class="mt-2 text-sm text-slate-300">
      Fetch real data from this group to preview what the API returns. The request runs directly in your browser.
    </p>

    <div v-if="demoRoutes.length" class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
      <USelectMenu
        v-model="selectedPath"
        :items="selectItems"
        value-key="id"
        class="sm:w-72"
      />
      <UButton
        color="neutral"
        class="whitespace-nowrap"
        icon="lucide:play"
        :loading="loading"
        @click="runDemo"
      >
        Run request
      </UButton>
    </div>
    <p v-else class="mt-4 text-xs text-slate-500">
      No live demos available for this section yet.
    </p>

    <div class="mt-4 space-y-3">
      <UAlert v-if="errorMessage" color="error" variant="soft">
        <span class="text-xs">{{ errorMessage }}</span>
      </UAlert>
      <pre
        v-if="response"
        class="max-h-64 overflow-y-auto rounded-xl bg-slate-900/70 p-4 text-xs leading-relaxed text-slate-200"
      >{{ formattedResponse }}</pre>
      <USkeleton v-if="loading" class="h-36 w-full rounded-xl bg-slate-900/70" />
    </div>
  </div>
</template>

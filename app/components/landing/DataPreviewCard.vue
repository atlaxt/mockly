<script setup lang="ts">
const props = defineProps<{
  baseApiUrl: string
  options: PreviewOption[]
}>()

const selectedPath = ref('')
const loading = ref(false)
const response = ref<string | null>(null)
const errorMessage = ref<string | null>(null)

watch(
  () => props.options,
  (options) => {
    if (!options.length) {
      selectedPath.value = ''
      return
    }

    if (!options.some(option => option.path === selectedPath.value)) {
      selectedPath.value = options[0]?.path ?? ''
    }
  },
  { immediate: true, deep: true },
)

const selectedOption = computed(() => props.options.find(option => option.path === selectedPath.value))

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

async function runPreview() {
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
  <section class="mt-16">
    <UCard class="border border-slate-800 bg-slate-950/70 text-slate-100" :ui="{ body: 'space-y-5' }">
      <div class="space-y-2">
        <h2 class="text-lg font-semibold text-white">
          Preview real responses
        </h2>
        <p class="text-sm text-slate-400">
          Hit any endpoint directly from this page and inspect the JSON output. Perfect for quick validation before you wire it into
          your app.
        </p>
      </div>

      <div v-if="props.options.length" class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <USelectMenu
          v-model="selectedPath"
          :items="props.options.map(option => ({ id: option.path, label: option.label }))"
          value-key="id"
          class="sm:w-80"
        />
        <UButton
          color="neutral"
          icon="lucide:download"
          :loading="loading"
          @click="runPreview"
        >
          Fetch data
        </UButton>
      </div>

      <p v-if="selectedOption" class="text-xs text-slate-500">
        <span class="font-semibold text-slate-300">{{ selectedOption.method }}</span>
        <span class="mx-2 text-slate-500">•</span>
        {{ selectedOption.description }}
      </p>

      <div class="space-y-3">
        <UAlert v-if="errorMessage" color="error" variant="soft">
          <span class="text-xs">{{ errorMessage }}</span>
        </UAlert>
        <USkeleton v-if="loading" class="h-40 w-full rounded-xl bg-slate-900/70" />
        <pre
          v-if="response"
          class="max-h-64 overflow-y-auto rounded-xl bg-slate-900/70 p-4 text-xs leading-relaxed text-slate-200"
        >{{ formattedResponse }}</pre>
      </div>
    </UCard>
  </section>
</template>

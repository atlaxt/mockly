<script setup lang="ts">
const toast = useToast()
const baseApiUrl = ref('https://mockly.atlaxt.me/api')

async function copyBaseUrl() {
  if (!process.client) {
    return
  }

  try {
    await navigator.clipboard.writeText(baseApiUrl.value)
    toast.add({
      title: 'Copied',
      description: 'Base API URL saved to your clipboard.',
      color: 'success',
      icon: 'lucide:check',
    })
  }
  catch {
    toast.add({
      title: 'Copy failed',
      description: 'Clipboard access was denied by the browser.',
      color: 'error',
      icon: 'lucide:circle-alert',
    })
  }
}

onMounted(() => {
  if (process.client) {
    baseApiUrl.value = `${window.location.origin}/api`
  }
})

useHead({
  title: 'Mockly — Ready-to-use mock API',
  meta: [
    {
      name: 'description',
      content: 'Generate realistic mock data for demos, prototyping and testing with Mockly’s ready-to-use endpoints.',
    },
  ],
})
</script>

<template>
  <div class="space-y-16 pb-8">
    <LandingHeroSection :base-api-url="baseApiUrl" @copy="copyBaseUrl">
      <div class="grid gap-4 sm:grid-cols-3">
        <div
          v-for="item in quickStartItems"
          :key="item.title"
          class="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
        >
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/10 text-primary-300">
            <UIcon :name="item.icon" class="h-4 w-4" />
          </span>
          <p class="mt-2 text-sm font-medium text-slate-100">
            {{ item.title }}
          </p>
          <p class="mt-1 text-xs leading-relaxed text-slate-400">
            {{ item.description }}
          </p>
        </div>
      </div>
    </LandingHeroSection>

    <LandingFeatureGrid :features="landingFeatures" />

    <LandingDataPreviewCard :base-api-url="baseApiUrl" :options="previewOptions" />

    <DocumentationSiteFooter />
  </div>
</template>

<script setup lang="ts">
const toast = useToast()
const baseApiUrl = ref('https://mockly.atlaxt.me/api')

const endpointGroups = computed<ResolvedEndpointGroup[]>(() => resolveEndpointGroups(baseApiUrl.value))
const integrationSnippet = computed(() => buildIntegrationSnippet(baseApiUrl.value))

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
  title: 'Mockly API documentation',
  meta: [
    {
      name: 'description',
      content: 'Detailed reference for the Mockly API including live demos, cURL examples and integration snippets.',
    },
  ],
})
</script>

<template>
  <div class="space-y-16 pb-8">
    <LandingHeroSection :base-api-url="baseApiUrl" :quick-start="quickStartItems" @copy="copyBaseUrl" />

    <DocumentationEndpointGuide :groups="endpointGroups" :base-api-url="baseApiUrl" />

    <section class="mt-16 grid gap-8 lg:grid-cols-5">
      <div class="lg:col-span-2">
        <DocumentationUuidParametersCard :parameters="uuidParameters" />
      </div>
      <div class="lg:col-span-3">
        <IntegrationExampleCard :code-sample="integrationSnippet" />
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

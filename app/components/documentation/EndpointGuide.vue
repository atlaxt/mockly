<script setup lang="ts">
defineProps<{
  groups: ResolvedEndpointGroup[]
  baseApiUrl: string
}>()
</script>

<template>
  <section id="endpoint-guide" class="mt-16 space-y-12">
    <div>
      <h2 class="text-2xl font-semibold text-white">
        Endpoint guide
      </h2>
      <p class="mt-3 max-w-3xl text-sm text-slate-400">
        Every endpoint responds over HTTPS with JSON payloads. Use the live demos to preview responses or copy the provided cURL
        commands to integrate with your tooling.
      </p>
    </div>

    <div class="space-y-16">
      <section v-for="group in groups" :key="group.title" class="space-y-8">
        <header class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex items-center gap-3">
            <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-300">
              <UIcon :name="group.icon" class="h-5 w-5" />
            </span>
            <div>
              <h3 class="text-xl font-semibold text-white">
                {{ group.title }}
              </h3>
              <p class="text-sm text-slate-400">
                {{ group.summary }}
              </p>
            </div>
          </div>
          <p class="max-w-xl text-sm text-slate-400">
            {{ group.details }}
          </p>
        </header>

        <div class="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
          <DocumentationEndpointLiveDemo :base-api-url="baseApiUrl" :routes="group.routes" />
          <div class="space-y-6">
            <DocumentationEndpointRouteCard
              v-for="route in group.routes"
              :key="route.path"
              :route="route"
            />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
